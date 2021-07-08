# timer

Set timeout and return cancellation function.

```typescript
import timer from '@xpr/swiss-knife/time/timer';

const cancel = timer(() => {}, 1000);
cancel();
```
