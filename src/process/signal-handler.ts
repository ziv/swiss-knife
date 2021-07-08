import { GenericAsyncFunction } from '@/types/functions';

export const Signals: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

export type SignalHandlerOptions = {
  signals: NodeJS.Signals[];
  proc: NodeJS.Process;
};

export default function signalHandler(
  finalize: GenericAsyncFunction,
  { signals, proc }: SignalHandlerOptions = { signals: Signals, proc: process }
): void {
  for (const signal of signals) {
    proc.once(signal, async () => {
      try {
        await finalize();
      } finally {
        proc.kill(proc.pid, signal);
      }
    });
  }
}
