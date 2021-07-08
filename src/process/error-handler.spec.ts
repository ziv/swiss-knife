import { EventEmitter } from 'events';
import errorHandler, { Errors as errors } from '@/process/error-handler';
import { GenericAsyncFunction, UnaryFunction } from '@/types/functions';

class Proc extends EventEmitter {
  constructor(public readonly done: UnaryFunction) {
    super();
  }

  exit(code: number) {
    this.done(code);
  }
}

const getPromise = () => ({} as unknown as Promise<unknown>);

const compose = (expectedCode: number, done: jest.DoneCallback) => {
  const finalize = expectedCode
    ? jest.fn().mockRejectedValue(undefined)
    : jest.fn().mockResolvedValue(undefined);

  const proc = new Proc((code: number) => {
    expect(finalize).toHaveBeenCalled();
    expect(code).toEqual(expectedCode);
    done();
  }) as unknown;

  return [finalize, proc] as [GenericAsyncFunction, NodeJS.Process];
};

describe('error-handler', () => {
  it('should create error handler on process', () => {
    errorHandler(async () => {});
  });

  it('should handle "unhandledRejection" with 0', done => {
    const [finalize, proc] = compose(0, done);

    errorHandler(finalize, { proc, errors });
    proc.emit('unhandledRejection', 'test', getPromise());
  });

  it('should handle "unhandledRejection" with 1', done => {
    const [finalize, proc] = compose(1, done);

    errorHandler(finalize, { proc, errors });
    proc.emit('unhandledRejection', 'test', getPromise());
  });

  it('should handle "uncaughtException" with 0', done => {
    const [finalize, proc] = compose(0, done);

    errorHandler(finalize, { proc, errors });
    proc.emit('uncaughtException', new Error());
  });

  it('should handle "uncaughtException" with 1', done => {
    const [finalize, proc] = compose(1, done);

    errorHandler(finalize, { proc, errors });
    proc.emit('uncaughtException', new Error());
  });
});
