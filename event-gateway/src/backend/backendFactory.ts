import { EventBackendContract } from 'src/backend/eventBackendContract';
import { LocalBackend } from 'src/backend/localBackend';
import { BackendConfigContract } from 'src/shared/config/config';
import { writeFile } from 'src/wrappers/fileSystemWrapper';

type backendFactoryFunction = (backendConfig: BackendConfigContract) => EventBackendContract;

const createLocalBackend: backendFactoryFunction = ({ localBackendConfig }: BackendConfigContract): EventBackendContract => {
  const filePath = localBackendConfig.filePath();
  return new LocalBackend(filePath, writeFile);
};

enum BackendType {
  Local = 'local',
}

const backendFactory: Record<BackendType, backendFactoryFunction> = {
  [BackendType.Local]: createLocalBackend,
};

const getTypePerConfig = (backendConfig: BackendConfigContract): (BackendType | null) => {
  if (backendConfig.localBackendConfig) {
    return BackendType.Local;
  }
  return null;
};

const createBackend = (backendConfig: BackendConfigContract): EventBackendContract => {
  const type = getTypePerConfig(backendConfig);

  if (type === null) {
    throw new Error('Invalid backend configuration');
  }

  console.debug(`Creating backend of type ${type}`);
  return backendFactory[type](backendConfig);
};

export { createBackend };
