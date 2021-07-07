import compose from '@/fp/compose';

const inc = x => x + 1;
const square = x => x * x;

describe('pipe', () => {
  it('should create a function', () => {
    expect(compose(inc, square)).toBeInstanceOf(Function);
  });

  it('should return compose (x** + 1)', () => {
    const piped = compose(inc, square);
    expect(piped(1)).toEqual(2);
    expect(piped(2)).toEqual(5);
  });

  it('should return compose ((x+1)**)', () => {
    const piped = compose(square, inc);
    expect(piped(1)).toEqual(4);
    expect(piped(2)).toEqual(9);
  });
});
