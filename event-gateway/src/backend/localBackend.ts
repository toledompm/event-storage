import {
  EventBackendContract,
  EventFilter
} from 'src/backend/eventBackendContract';
import { EventChunk } from 'src/proto/events_pb';
import { writeFile } from 'src/wrappers/fileSystemWrapper';

export class LocalBackend implements EventBackendContract {
  constructor(private readonly storagePath: string) {}

  async persistChunk(eventChunk: EventChunk): Promise<void> {
    const events = eventChunk.getEventsList();
    const fileName = `${this.storagePath}/${Date.now().toString()}.json`;
    const eventsJson = JSON.stringify(events);

    return writeFile(fileName, eventsJson);
  }

  async getByFilter(_filter: EventFilter): Promise<EventChunk> {
    return new EventChunk();
  }
}
