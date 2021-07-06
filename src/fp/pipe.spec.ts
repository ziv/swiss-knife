import pipe from '@sk/fp/pipe';

const inc = x => x + 1;
const square = x => x * x;

describe('pipe', () => {
  it('should create a function', () => {
    expect(pipe(inc, square)).toBeInstanceOf(Function);
  });

  it('should return pipe ((x+1)**)', () => {
    const piped = pipe(inc, square);
    expect(piped(1)).toEqual(4);
    expect(piped(2)).toEqual(9);
  });

  it('should return pipe (x** + 1)', () => {
    const piped = pipe(square, inc);
    expect(piped(1)).toEqual(2);
    expect(piped(2)).toEqual(5);
  });
});
