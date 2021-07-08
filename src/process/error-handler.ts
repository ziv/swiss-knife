import { GenericAsyncFunction } from '@/types/functions';

export const Errors = ['unhandledRejection', 'uncaughtException'];

export type ErrorHandlerOptions = { errors: string[]; proc: NodeJS.Process };

export default function errorHandler(
  finalize: GenericAsyncFunction,
  { errors, proc }: ErrorHandlerOptions = { errors: Errors, proc: process }
): void {
  for (const error of errors) {
    proc.on(error, async () => {
      try {
        await finalize();
        proc.exit(0);
      } catch (_error) {
        proc.exit(1);
      }
    });
  }
}
