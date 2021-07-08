# signalHandler

Gracefully kill error handler.

Handle by default:
* `SIGTERM`
* `SIGINT`
* `SIGUSR2`

```typescript
import signalHandler from '@xpr/swiss-knife/process/signal-handler';

signalHandler(async () => {
  // gracefull kill
});
```
