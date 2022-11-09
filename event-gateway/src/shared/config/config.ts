import configJson from 'src/eventgatewayconfig.json';

const localBackendConfig = {
  filePath: () => {
    return configJson.backend.localBackend.path;
  },
};

const config = {
  backend: {
    localBackendConfig,
  },
};

interface BackendConfigContract {
  localBackendConfig: {
    filePath: () => string;
  };
}

interface ConfigContract {
  backend: BackendConfigContract;
};

export { config, ConfigContract, BackendConfigContract };
