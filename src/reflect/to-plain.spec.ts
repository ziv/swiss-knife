import toPlain from '@/reflect/to-plain';

describe('to-plain', () => {
  it('should convert instance to plain object', () => {
    class Foo {
      bar() {
        return true;
      }
    }
    const plain = toPlain(Foo, new Foo());
    expect(plain).toBeInstanceOf(Object);
    expect(plain).toHaveProperty('constructor');
    expect(plain).toHaveProperty('bar');
  });
});
