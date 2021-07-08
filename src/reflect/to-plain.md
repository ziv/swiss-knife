# toPlain

Convert instance of `class` to plain object with the same methods.
The class constructor become method to.

```typescript
import toPlain from '@xpr/swiss-knife/reflect/to-plain';

class Foo {
  bar() {
    return true;
  }
}

const instance = new Foo();

console.log(instance);
// Foo {}

console.log(toPlain(instance));
// { constructor: [Function], bar: [Function] }
```
