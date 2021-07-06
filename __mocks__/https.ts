import fromString from '@sk/streams/from-string';
import { Writable } from 'stream';

// fake request
export const request = (url, _, callback ) => {
  callback(fromString(url))
  return new Writable();
}
