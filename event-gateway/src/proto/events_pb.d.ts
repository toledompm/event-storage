// package: events.v1
// file: events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Event extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): Event;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        description: string,

        tagsMap: Array<[string, string]>,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class EventChunk extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<Event>;
    setEventsList(value: Array<Event>): EventChunk;
    addEvents(value?: Event, index?: number): Event;
    getPage(): number;
    setPage(value: number): EventChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventChunk.AsObject;
    static toObject(includeInstance: boolean, msg: EventChunk): EventChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventChunk;
    static deserializeBinaryFromReader(message: EventChunk, reader: jspb.BinaryReader): EventChunk;
}

export namespace EventChunk {
    export type AsObject = {
        eventsList: Array<Event.AsObject>,
        page: number,
    }
}

export class GetEventRequest extends jspb.Message { 

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): GetEventRequest.Interval | undefined;
    setInterval(value?: GetEventRequest.Interval): GetEventRequest;
    getPage(): number;
    setPage(value: number): GetEventRequest;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEventRequest): GetEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEventRequest;
    static deserializeBinaryFromReader(message: GetEventRequest, reader: jspb.BinaryReader): GetEventRequest;
}

export namespace GetEventRequest {
    export type AsObject = {
        interval?: GetEventRequest.Interval.AsObject,
        page: number,

        tagsMap: Array<[string, string]>,
    }


    export class Interval extends jspb.Message { 

        hasStart(): boolean;
        clearStart(): void;
        getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setStart(value?: google_protobuf_timestamp_pb.Timestamp): Interval;

        hasEnd(): boolean;
        clearEnd(): void;
        getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEnd(value?: google_protobuf_timestamp_pb.Timestamp): Interval;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Interval.AsObject;
        static toObject(includeInstance: boolean, msg: Interval): Interval.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Interval, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Interval;
        static deserializeBinaryFromReader(message: Interval, reader: jspb.BinaryReader): Interval;
    }

    export namespace Interval {
        export type AsObject = {
            start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}
