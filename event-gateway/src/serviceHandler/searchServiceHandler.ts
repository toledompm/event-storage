import { ServerWritableStream } from '@grpc/grpc-js';
import { getBackendInstance } from 'src/backend/backendInstance';
import { EventChunk, GetEventRequest } from 'src/proto/events_pb';

const getEventChunk = async (
  call: ServerWritableStream<GetEventRequest, EventChunk>
) => {
  const backend = getBackendInstance();

  const chunk = await backend.getByFilter({
    partialTags: call.request.getTagsMap(),
    interval: call.request.getInterval(),
  });

  call.write(chunk);
  call.end();
};

export { getEventChunk };
