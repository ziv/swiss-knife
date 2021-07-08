import { NoArgsFunction } from '@/types/functions';

export default function timer(
  executor: NoArgsFunction,
  ms: number
): NoArgsFunction {
  const timeout = setTimeout(executor, ms);
  return () => clearTimeout(timeout);
}
