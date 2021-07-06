export type UnaryFunction<T = unknown, R = T> = (input: T) => R;
export type UnaryAsyncFunction<T = unknown, R = T> = (input: T) => Promise<R>;

export type PipedFunction<T = unknown, R = T> = UnaryFunction;
