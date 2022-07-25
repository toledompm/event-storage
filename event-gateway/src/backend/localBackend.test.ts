import test, { ExecutionContext } from 'ava';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import * as sinon from 'sinon';
import { LocalBackend } from 'src/backend/localBackend';
import { Event, EventChunk } from 'src/proto/events_pb';

const BACKEND_PATH = '/tmp';

const setup = (): { backend: LocalBackend; writeFileMock: sinon.SinonStub } => {
  const writeFileMock = sinon.stub();
  const backend = new LocalBackend(BACKEND_PATH, writeFileMock);

  return { backend, writeFileMock };
};

test('persistChunk', async (t: ExecutionContext) => {
  const { backend, writeFileMock } = setup();

  const event = new Event();
  event.setTimestamp(new Timestamp());
  event.setDescription('test');

  const eventChunk = new EventChunk();
  eventChunk.setEventsList([event]);

  await backend.persistChunk(eventChunk);

  const stringifiedEvents = JSON.stringify([event]);
  const regexMatcher = sinon.match(new RegExp(`${BACKEND_PATH}/.+\\.json`));

  t.assert(
    writeFileMock.calledOnceWithExactly(regexMatcher, stringifiedEvents)
  );
});
