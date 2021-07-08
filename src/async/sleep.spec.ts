import sleep from '@/async/sleep';

describe('sleep', () => {
  it('should sleep', async () => {
    const start = Date.now();
    await sleep(2000); // sleep 2 seconds
    const end = Date.now();
    // test grace of 100ms
    expect(end - start).toBeLessThan(2050);
    expect(end - start).toBeGreaterThan(1950);
  });
});
