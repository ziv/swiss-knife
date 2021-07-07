# https

Raw `HTTPS` promisify request function.

```typescript
import { RequestOptions } from 'https';
import { IncomingMessage } from 'http';
import https from '@xpr/swiss-knife/http/https';

const options: RequestOptions = {};
const response: IncomingMessage = await https('https://example.org', options);
```
