import { EventEmitter } from 'events';
import signalHandler, { Signals as signals } from '@/process/signal-handler';
import { GenericAsyncFunction, GenericFunction } from '@/types/functions';

class Proc extends EventEmitter {
  constructor(public readonly pid: string,
              public readonly done: GenericFunction) {
    super();
  }

  kill(pid: string, signal: string) {
    this.done(pid, signal);
  }
}

const compose = (expectedSignal: string, done: jest.DoneCallback) => {
  const finalize = jest.fn().mockResolvedValue(undefined);

  const proc = new Proc('test-pid', (pid: string, signal: string) => {
    expect(finalize).toHaveBeenCalled();
    expect(signal).toEqual(expectedSignal);
    done();
  }) as unknown;

  return [finalize, proc] as [GenericAsyncFunction, NodeJS.Process];
};

describe('signal-handler', () => {
  it('should create error handler on process', () => {
    signalHandler(async () => {});
  });

  describe.each(signals)('should handle "%s"', signal => {
    it(signal, done => {
      const [finalize, proc] = compose(signal, done);

      signalHandler(finalize, { proc, signals });
      proc.emit(signal, signal);
    });
  });
});
