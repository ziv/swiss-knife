# compose

Create composition function from unary functions list.

```typescript
import compose from '@xpr/swiss-knife/fp/compose';

const inc = x => x + 1;
const square = x => x + x;

const example1 = compose(inc, square);
const example2 = compose(square, inc);

console.log(example1(1)); // 2
console.log(example2(1)); // 4
```
