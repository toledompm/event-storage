// package: events.v1
// file: events.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as events_pb from "./events_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ISearchServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getEventChunk: ISearchServiceService_IGetEventChunk;
}

interface ISearchServiceService_IGetEventChunk extends grpc.MethodDefinition<events_pb.GetEventRequest, events_pb.EventChunk> {
    path: "/events.v1.SearchService/GetEventChunk";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<events_pb.GetEventRequest>;
    requestDeserialize: grpc.deserialize<events_pb.GetEventRequest>;
    responseSerialize: grpc.serialize<events_pb.EventChunk>;
    responseDeserialize: grpc.deserialize<events_pb.EventChunk>;
}

export const SearchServiceService: ISearchServiceService;

export interface ISearchServiceServer extends grpc.UntypedServiceImplementation {
    getEventChunk: grpc.handleServerStreamingCall<events_pb.GetEventRequest, events_pb.EventChunk>;
}

export interface ISearchServiceClient {
    getEventChunk(request: events_pb.GetEventRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<events_pb.EventChunk>;
    getEventChunk(request: events_pb.GetEventRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<events_pb.EventChunk>;
}

export class SearchServiceClient extends grpc.Client implements ISearchServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getEventChunk(request: events_pb.GetEventRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<events_pb.EventChunk>;
    public getEventChunk(request: events_pb.GetEventRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<events_pb.EventChunk>;
}
