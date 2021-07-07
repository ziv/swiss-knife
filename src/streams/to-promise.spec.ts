import toPromise from '@/streams/to-promise';
import fromString from '@/streams/from-string';
import { Readable } from 'stream';

describe('toPromise', () => {
  it('should resolve buffer from stream', async () => {
    const buffer = await toPromise(fromString('test'));
    expect(buffer.toString()).toEqual('test');
  });

  it('should reject promise on stream error', async () => {
    const badStream = new Readable({
      async read() {
        this.emit('error', 'test');
      }
    });

    try {
      await toPromise(badStream);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error.toString()).toEqual('test');
    }
  });
});
