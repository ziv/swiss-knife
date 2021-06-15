import { RequestOptions, request } from 'https';
import stream from './stream';

/**
 * Raw HTTPS client
 *
 * @param url
 * @param opts
 * @param data
 */
export default function https(
  url: string,
  opts: RequestOptions = {},
  data?: string
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    // create request & stream response
    const req = request(url, opts, res => stream(res).then(resolve));
    // error handler
    req.on('error', reject);
    // if there is a data, write it
    if (data) {
      req.write(data);
    }
    // finalize
    req.end();
  });
}
