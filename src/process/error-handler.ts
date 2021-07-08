import { GenericAsyncFunction } from '@/types/functions';

export const Errors = ['unhandledRejection', 'uncaughtException'];

export type ErrorHandlerOptions = { types: string[]; proc: NodeJS.Process };

export default function errorHandler(
  finalize: GenericAsyncFunction,
  { types, proc }: ErrorHandlerOptions = { types: Errors, proc: process }
): void {
  for (const type of types) {
    proc.on(type, async () => {
      try {
        await finalize();
        proc.exit(0);
      } catch (_error) {
        proc.exit(1);
      }
    });
  }
}
