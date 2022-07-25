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

export default config;
