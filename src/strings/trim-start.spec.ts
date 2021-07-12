import trimStart from '@/strings/trim-start';

describe('trimLeft', () => {
  it('should create a function', () => {
    expect(trimStart('test')).toBeInstanceOf(Function);
  });

  it('should trim left all numbers (explicit)', () => {
    const trim = trimStart('1234567890');
    expect(trim('02468test13579')).toEqual('test13579');
  });

  it('should trim left all numbers (regex)', () => {
    const trim = trimStart('\\d');
    expect(trim('02468test13579')).toEqual('test13579');
  });
});
