import startGrpcServer from 'src/grpcServer';
import startHttpServer from 'src/httpServer';

const HOST = '0.0.0.0';
const GRPC_PORT = 50051;

const HTTP_PORT = 3000;

startGrpcServer(HOST, GRPC_PORT);
startHttpServer(HTTP_PORT);
