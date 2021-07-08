import { UnaryFunction } from '@/types/functions';

export interface Defer {
  resolve: UnaryFunction;
  reject: UnaryFunction;
}

export interface Deferred<T> extends Promise<T>, Defer {}

export default function defer<T>(): Deferred<T> {
  const proxy = {} as Defer;

  const deferred = new Promise<T>((resolve, reject) => {
    proxy.reject = reject;
    proxy.resolve = resolve;
  }) as Deferred<T>;

  deferred.resolve = proxy.resolve;
  deferred.reject = proxy.reject;

  return deferred;
}
