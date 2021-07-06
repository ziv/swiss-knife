jest.mock('https');
import https from '@sk/http/https';

describe('https', () => {
  it('should request https url', async () => {
    const buffer = await https('https://fake-url');
    expect(buffer.toString()).toEqual('https://fake-url');
  });
});
