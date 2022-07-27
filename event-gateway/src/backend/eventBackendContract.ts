import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { EventChunk } from 'src/proto/events_pb';

interface EventFilter {
  partialTags: Record<string, string>;
  interval: { start: Timestamp; end: Timestamp };
}

interface EventBackendContract {
  persistChunk(events: EventChunk): Promise<void>;
  getByFilter(filter: EventFilter): Promise<EventChunk>;
}

export { EventBackendContract, EventFilter };
