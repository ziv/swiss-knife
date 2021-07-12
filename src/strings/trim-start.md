# trimStart

Create trim start function for provided characters or regex string.

```typescript
import trimStart from '@xpr/swiss-knife/strings/trim-start';

const trimStart1 = trimStart('0123456789');
const trimStart2 = trimStart('\\d');

trimStart1('123text'); // text
trimStart2('999text'); // text
```
