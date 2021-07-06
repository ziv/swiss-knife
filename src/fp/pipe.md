# pipe

Create piping unary function from unary functions.

```typescript
import pipe from '@xpr/swiss-knife/fp/pipe';

const add1 = x => x + 1;
const square = x => x + x;

const example1 = pipe(add1, square);
const example2 = pipe(square, add1);

console.log(example1(1)); // 4
console.log(example2(1)); // 2
```
