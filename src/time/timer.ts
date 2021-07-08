import { NoArgsFunction } from '@/types/functions';

export default function timer(executor: NoArgsFunction, ms: number) {
  const timeout: NodeJS.Timeout = setTimeout(executor, ms);
  return () => clearTimeout(timeout);
}
