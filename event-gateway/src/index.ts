import { Server, ServerCredentials } from '@grpc/grpc-js';

import { SearchServiceService } from './proto/events_grpc_pb';
import { getEventChunk } from './serviceHandler/searchServiceHandler';

const PORT = 50051;

const server = new Server();

server.addService(SearchServiceService, {
  getEventChunk,
});

server.bindAsync(
  `0.0.0.0:${PORT}`,
  ServerCredentials.createInsecure(),
  (error: Error | null) => {
    if (error) {
      console.error(error);
      throw error;
    }
    server.start();
    console.log(`Server started on port ${PORT}`);
  }
);
