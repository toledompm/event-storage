// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var events_pb = require('./events_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_events_v1_EventChunk(arg) {
  if (!(arg instanceof events_pb.EventChunk)) {
    throw new Error('Expected argument of type events.v1.EventChunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_events_v1_EventChunk(buffer_arg) {
  return events_pb.EventChunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_events_v1_GetEventRequest(arg) {
  if (!(arg instanceof events_pb.GetEventRequest)) {
    throw new Error('Expected argument of type events.v1.GetEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_events_v1_GetEventRequest(buffer_arg) {
  return events_pb.GetEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SearchServiceService = exports.SearchServiceService = {
  getEventChunk: {
    path: '/events.v1.SearchService/GetEventChunk',
    requestStream: false,
    responseStream: true,
    requestType: events_pb.GetEventRequest,
    responseType: events_pb.EventChunk,
    requestSerialize: serialize_events_v1_GetEventRequest,
    requestDeserialize: deserialize_events_v1_GetEventRequest,
    responseSerialize: serialize_events_v1_EventChunk,
    responseDeserialize: deserialize_events_v1_EventChunk,
  },
};

exports.SearchServiceClient = grpc.makeGenericClientConstructor(SearchServiceService);
