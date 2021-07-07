# pipe

Create piping function from unary functions list.

```typescript
import pipe from '@xpr/swiss-knife/fp/pipe';

const inc = x => x + 1;
const square = x => x + x;

const example1 = pipe(inc, square);
const example2 = pipe(square, inc);

console.log(example1(1)); // 4
console.log(example2(1)); // 2
```
