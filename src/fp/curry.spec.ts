import curry from '@/fp/curry';

const concat = (a: string, b: string, c: string) => `${a}${b}${c}`;

describe('curry', () => {
  const a = 'a',
    b = 'b',
    c = 'c',
    expected = 'abc';
  const curried = curry(concat);

  it('should create a function', () => {
    expect(curried).toBeInstanceOf(Function);
  });

  it('return the same value for the same input', () => {
    expect(curried(a, b, c)).toEqual(concat(a, b, c));
  });

  it('should return "abc" for (a, b, c)', () => {
    expect(curried(a, b, c)).toEqual(expected);
  });

  it('should return "abc" for (a, b)(c)', () => {
    expect(curried(a, b)(c)).toEqual(expected);
  });

  it('should return "abc" for (a)(b, c)', () => {
    expect(curried(a)(b, c)).toEqual(expected);
  });

  it('should return "abc" for (a)(b)(c)', () => {
    expect(curried(a)(b)(c)).toEqual(expected);
  });
});
