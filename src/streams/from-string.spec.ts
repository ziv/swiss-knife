import fromString from '@/streams/from-string';

describe('fromString', () => {
  it('should create readable stream from string', done => {
    const stream = fromString('test');

    stream.on('data', (data: Buffer) => {
      expect(data.toString()).toEqual('test');
      done();
    });
  });

  it('should create readable stream in different encoding', done => {
    // base64 = "dGVzdA=="
    const base64 = Buffer.from('test', 'utf-8').toString('base64');
    const stream = fromString(base64, 'base64');

    stream.on('data', (data: Buffer) => {
      expect(data.toString()).toEqual('test');
      done();
    });
  });

  it('should not re-write written string', async () => {
    const stream = fromString('test');
    expect(stream.read().toString()).toEqual('test');
    // continue to read!!!
    await stream._read(2);
    // everything is cool
    expect(stream.read()).toEqual(null);
  });
});
