import { CurriedFunction, GenericFunction } from '@/types/functions';

export default function curry<R = unknown>(
  func: GenericFunction
): CurriedFunction & R {
  const _ = (...args: unknown[]) =>
    args.length >= func.length
      ? func.apply(this, args)
      : (..._args: unknown[]) => _.apply(this, [...args, ..._args]);
  return _ as CurriedFunction & R;
}
