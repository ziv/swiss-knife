// generic
export type GenericFunction<R = unknown> = (...args: unknown[]) => R;
export type GenericAsyncFunction<R = unknown> = (...args: unknown[]) => Promise<R>;

// unary
export type UnaryFunction<T = unknown, R = T> = (input: T) => R;
export type UnaryAsyncFunction<T = unknown, R = T> = (input: T) => Promise<R>;

// piped
export type PipedFunction<T = unknown, R = T> = UnaryFunction;
