import { RequestOptions, request } from 'https';
import toPromise from '@/streams/to-promise';

export default function https(
  url: string,
  opts: RequestOptions = {},
  data?: Buffer | string
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const req = request(url, opts, res => toPromise(res).then(resolve));
    req.on('error', reject);
    if (data) {
      req.write(data);
    }
    req.end();
  });
}
