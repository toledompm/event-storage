import { createBackend } from 'src/backend/backendFactory';
import { EventBackendContract } from 'src/backend/eventBackendContract';
import { config } from 'src/shared/config/config';

let backendInstance: EventBackendContract | null = null;

export const getBackendInstance = (): EventBackendContract => {
  if (backendInstance === null) {
    backendInstance = createBackend(config.backend);
  }
  return backendInstance;
}
