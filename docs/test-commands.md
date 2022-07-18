### GRPCurl commands for testing
_get grpcurl [here](https://github.com/fullstorydev/grpcurl)_


#### Gateway getEventChunk
``` bash
grpcurl -plaintext \
-import-path shared/proto/events/v1 \
-proto events.proto \
-d '{}' \
0.0.0.0:50051 events.v1.SearchService/GetEventChunk
```
