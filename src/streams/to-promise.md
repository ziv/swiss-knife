# toPromise

Raw `stream` to `Promise` converter.

```typescript
import toPromise from '@xpr/swiss-knife/streams/to-promise';

const stream = getReadableStream();
const buffer: Buffer = await toPromise(stream);
```
