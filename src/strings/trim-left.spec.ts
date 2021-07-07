import trimLeft from '@/strings/trim-left';

describe('trimLeft', () => {
  it('should create a function', () => {
    expect(trimLeft('test')).toBeInstanceOf(Function);
  });

  it('should trim left all numbers (explicit)', () => {
    const trim = trimLeft('1234567890');
    expect(trim('02468test13579')).toEqual('test13579');
  });

  it('should trim left all numbers (regex)', () => {
    const trim = trimLeft('\\d');
    expect(trim('02468test13579')).toEqual('test13579');
  });
});
