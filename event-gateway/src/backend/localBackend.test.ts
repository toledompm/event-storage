import test, { ExecutionContext } from 'ava';
import { EventChunk } from 'src/proto/events_pb';

import { LocalBackend } from '../../src/backend/localBackend';

const setup = (): { backend: LocalBackend } => {
  const backend = new LocalBackend('/tmp');

  return { backend };
};

const persistsChunk = async (t: ExecutionContext, input: EventChunk) => {
  t.pass();
};

test('persistChunk', persistsChunk, new EventChunk());
