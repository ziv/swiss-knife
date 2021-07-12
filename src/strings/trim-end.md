# trimEnd

Create trim end function for provided characters or regex string.

```typescript
import trimEnd from '@xpr/swiss-knife/strings/trim-end';

const trimEnd1 = trimEnd('0123456789');
const trimEnd2 = trimEnd('\\d');

trimEnd1('text123'); // text
trimEnd1('text123'); // text
trimEnd2('text999'); // text
```
