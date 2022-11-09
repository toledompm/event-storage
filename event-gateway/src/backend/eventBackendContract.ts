import { Map } from 'google-protobuf';
import { GetEventRequest } from 'src/proto/events_pb';
import { EventChunk } from 'src/proto/events_pb';

interface EventFilter {
  partialTags: Map<string, string>;
  interval: GetEventRequest.Interval | undefined;
}

interface EventBackendContract {
  persistChunk(events: EventChunk): Promise<void>;
  getByFilter(filter: EventFilter): Promise<EventChunk>;
}

export { EventBackendContract, EventFilter };
