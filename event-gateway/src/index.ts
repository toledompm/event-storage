import { startGrpcServer } from 'src/grpcServer';

const HOST = '0.0.0.0';
const GRPC_PORT = 50051;

startGrpcServer(HOST, GRPC_PORT);
