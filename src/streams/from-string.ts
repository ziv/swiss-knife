import { Readable } from 'stream';

export default function fromString(
  str: string,
  encoding: BufferEncoding = 'utf8'
): Readable {
  let done = false;
  return new Readable({
    async read() {
      if (!done) {
        this.push(Buffer.from(str, encoding));
        this.push(null);
        done = true;
      }
    }
  });
}
