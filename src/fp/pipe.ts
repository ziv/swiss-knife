import { UnaryFunction, PipedFunction } from '@xpr/swiss-knife/types/functions';

export default function pipe<T = unknown, R = T>(...funcs: UnaryFunction[]): PipedFunction<T, R> {
  return (args: T) => funcs.reduce((arg, fn) => fn(arg), args) as R;
}
