import trimRight from '@/strings/trim-right';

describe('trimRight', () => {
  it('should create a function', () => {
    expect(trimRight('test')).toBeInstanceOf(Function);
  });

  it('should trim right all numbers (explicit)', () => {
    const trim = trimRight('1234567890');
    expect(trim('02468test13579')).toEqual('02468test');
  });

  it('should trim right all numbers (regex)', () => {
    const trim = trimRight('\\d');
    expect(trim('02468test13579')).toEqual('02468test');
  });
});
