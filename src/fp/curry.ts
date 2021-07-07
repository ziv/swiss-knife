export default function curry(func) {
  const _ = (...args: unknown[]) => args.length >= func.length
      ? func.apply(this, args)
      : (..._args: unknown[]) => _.apply(this, [...args, ..._args]);
  return _;
}
