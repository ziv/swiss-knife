jest.mock('https');
import https from '@/http/https';

describe('https', () => {
  it('should request https url', async () => {
    const buffer = await https('https://fake-url');
    expect(buffer.toString()).toEqual('https://fake-url');
  });

  it('should write to the request', async () => {
    const payload = Buffer.from('test');
    const buffer = await https('https://fake-url', {}, payload);
    expect(buffer.toString()).toEqual('https://fake-url');
  });
});
