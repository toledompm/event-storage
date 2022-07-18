import * as grpc from '@grpc/grpc-js';
import { SearchServiceService } from 'src/proto/events_grpc_pb';
import { getEventChunk } from 'src/serviceHandler/searchServiceHandler';

export const startGrpcServer = (host: string, grpcPort: number) => {
  const server = new grpc.Server();

  server.addService(SearchServiceService, {
    getEventChunk,
  });

  server.bindAsync(
    `${host}:${grpcPort}`,
    grpc.ServerCredentials.createInsecure(),
    (error: Error | null) => {
      if (error) {
        throw error;
      }
      server.start();
      console.log(`Server started on grpcPort ${grpcPort}`);
    }
  );
};
