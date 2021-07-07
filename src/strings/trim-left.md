# trimLeft

Create trim left function for provided characters or regex.

```typescript
import trimLeft from '@xpr/swiss-knife/strings/trim-left';

const trimLeft1 = trimLeft('0123456789');
const trimLeft2 = trimLeft('\\d');

trimLeft1('123text'); // text
trimLeft2('999text'); // text
```
