import now from '@/time/now';

describe('now', () => {
  it('should return a number', () => {
    expect(now()).toEqual(expect.any(Number));
  });

  it('should return current unix timestamp', () => {
    const milliseconds = Date.now();
    const seconds = now();

    expect(milliseconds / 1000 | 0).toEqual(seconds);
  });
})
