import timer from '@/time/timer';

describe('timer', () => {
  it('should create timer', done => {
    timer(done, 0);
  });

  it('should cancel timer', done => {
    const cancel = timer(() => done('error'), 1000);
    cancel();
    done();
  });
});
