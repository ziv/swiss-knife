export interface Type<T = unknown> extends Function {
  new (...args: unknown[]): T;
}
