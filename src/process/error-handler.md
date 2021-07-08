# errorHandler

Gracefully bail out error handler.

Handle by default:
* `unhandledRejection`
* `uncaughtException`

```typescript
import errorHandler from '@xpr/swiss-knife/process/error-handler';

errorHandler(async () => {
  // gracefull shut down
});
```
