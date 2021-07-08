# parse

`JSON.parse` wrap with try/catch block.

```typescript
import parse from '@xpr/swiss-knife/json/parse';

const data = parse('{"foo":"bar"}');
const empry = parse('-not-valid-json-'); // undefined
```
