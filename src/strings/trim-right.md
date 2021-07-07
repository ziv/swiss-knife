# trimRight

Create trim right function for provided characters or regex.

```typescript
import trimRight from '@xpr/swiss-knife/strings/trim-right';

const trimRight1 = trimRight('0123456789');
const trimRight2 = trimRight('\\d');

trimRight1('text123'); // text
trimRight2('text999'); // text
```
