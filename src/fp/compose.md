# compose

Create unary composition function from unary functions.

```typescript
import compose from '@xpr/swiss-knife/fp/compose';

const add1 = x => x + 1;
const square = x => x + x;

const example1 = compose(add1, square);
const example2 = compose(square, add1);

console.log(example1(1)); // 2
console.log(example2(1)); // 4
```
