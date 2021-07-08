import { UnaryFunction, PipedFunction } from '@/types/functions';

export default function pipe<T = unknown, R = T>(
  ...funcs: UnaryFunction[]
): PipedFunction<T, R> {
  return (args: T) => funcs.reduce((arg, fn) => fn(arg), args) as R;
}

// version with first function with multiple arguments
// export default function pipe<R>(...funcs: any[]): PipedFunction<unknown, R> {
//   return (...args: unknown[]) => funcs.reduceRight((f, g) => f(g(...args)));
// }
