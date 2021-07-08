# curry

Curring fix sized functions.

```typescript
import curry from '@xpr/swiss-knife/fp/curry';

const sum = (a, b, c) => a + b + x;
const curried = curry(sum);

console.log(sum(1, 2, 3)); // 6
console.log(curried(1, 2, 3)); // 6
console.log(curried(1)(2, 3)); // 6
console.log(curried(1, 2)(3)); // 6
console.log(curried(1)(2)(3)); // 6
```
