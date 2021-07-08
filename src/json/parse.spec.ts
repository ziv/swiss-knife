import parse from '@/json/parse';

describe('parse', () => {
  it('should parsed stringified object', () => {
    const data = { foo: 'bar' };
    const stringified = JSON.stringify(data);
    expect(parse(stringified)).toEqual(data);
  });

  it('should return undefined for unparsed string', () => {
    expect(parse('....')).toBeFalsy();
  });
});
