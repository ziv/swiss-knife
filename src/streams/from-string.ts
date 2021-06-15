import { Readable } from 'stream';

export default function fromString(str: string, encoding = 'utf8'): Readable {
  let ended = false;
  return new Readable({
    async read() {
      if (!ended) {
        this.push(Buffer.from(str, encoding as BufferEncoding));
        this.push(null);
        ended = true;
      }
    }
  });
}
