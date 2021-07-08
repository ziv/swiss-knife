import { PipedFunction, UnaryFunction } from '@/types/functions';

export default function compose<T = unknown, R = unknown>(
  ...funcs: UnaryFunction[]
): PipedFunction<T, R> {
  return (args: T) => funcs.reduceRight((arg, fn) => fn(arg), args) as R;
}
