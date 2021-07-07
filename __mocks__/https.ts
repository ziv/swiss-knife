import fromString from '@/streams/from-string';
import { Writable } from 'stream';

// fake request
export const request = (url, _, callback ) => {
  callback(fromString(url))
  return new Writable({
    write(chunk: any, encoding: BufferEncoding, callback: (error?: (Error | null)) => void) {
    }
  });
}
