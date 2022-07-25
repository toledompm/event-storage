import { EventBackendContract } from 'src/backend/eventBackendContract';
import { LocalBackend } from 'src/backend/localBackend';
import config from 'src/shared/config/config';
import { writeFile } from 'src/wrappers/fileSystemWrapper';

type backendFactoryFunction = () => EventBackendContract;

const createLocalBackend: backendFactoryFunction = (): EventBackendContract => {
  const filePath = config.backend.localBackendConfig.filePath();
  return new LocalBackend(filePath, writeFile);
};

enum BackendType {
  Local = 'local',
}

const backendFactory: Record<BackendType, backendFactoryFunction> = {
  [BackendType.Local]: createLocalBackend,
};

const createBackend = (type: BackendType): EventBackendContract => {
  console.debug(`Creating backend of type ${type}`);
  return backendFactory[type]();
};

export { createBackend, BackendType };
