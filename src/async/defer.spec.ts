import defer from '@/async/defer';

describe('defer', () => {
  it('should create promise like object', () => {
    expect(defer()).toBeInstanceOf(Promise);
  });

  it('should resolve value', done => {
    const deferred = defer();
    deferred.then(expected => {
      expect(expected).toEqual('test');
      done();
    });
    deferred.resolve('test');
  });

  it('should reject value', done => {
    const deferred = defer();
    deferred.catch(expected => {
      expect(expected).toEqual('test');
      done();
    });
    deferred.reject('test');
  });
});
