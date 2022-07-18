import { promises } from 'fs';

import {
  EventBackendContract,
  EventFilter,
} from 'src/backend/eventBackendContract';
import { EventChunk } from 'src/proto/events_pb';

export class LocalBackend implements EventBackendContract {
  constructor(private readonly storagePath: string) {}

  async persistChunk(eventChunk: EventChunk): Promise<void> {
    const events = eventChunk.getEventsList();
    const fileName = `${this.storagePath}/${Date.now().toString()}.json`;
    const eventsJson = JSON.stringify(events);

    return promises.writeFile(fileName, eventsJson);
  }

  async getByFilter(_filter: EventFilter): Promise<EventChunk> {
    return new EventChunk();
  }
}
