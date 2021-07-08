# defer

Creates a Deferred (Promise expose its handlers).

```typescript
import defer from '@xpr/swiss-knife/assync/defer';


const promise = new Promise(resolve => {
  resolve(true);
});

const deferred = defer();
deferred.resolve(true);
```
