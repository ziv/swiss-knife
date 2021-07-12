import trimEnd from '@/strings/trim-end';

describe('trimRight', () => {
  it('should create a function', () => {
    expect(trimEnd('test')).toBeInstanceOf(Function);
  });

  it('should trim right all numbers (explicit)', () => {
    const trim = trimEnd('1234567890');
    expect(trim('02468test13579')).toEqual('02468test');
  });

  it('should trim right all numbers (regex)', () => {
    const trim = trimEnd('\\d');
    expect(trim('02468test13579')).toEqual('02468test');
  });
});
