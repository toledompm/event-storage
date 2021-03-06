import { ServerWritableStream } from '@grpc/grpc-js';
import { EventChunk, GetEventRequest } from 'src/proto/events_pb';

export const getEventChunk = (
  call: ServerWritableStream<GetEventRequest, EventChunk>
) => {
  // TODO get event chunk from backend
  call.write(new EventChunk());
  call.end();
};
