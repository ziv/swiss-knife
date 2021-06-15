import { Readable } from 'stream';

/**
 * Raw stream to promise
 *
 * @param s
 */
export default function toPromise(s: Readable): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const buffers: Buffer[] = [];
        s.on('error', reject);
        s.on('data', chunk => buffers.push(chunk));
        s.on('end', () => resolve(Buffer.concat(buffers)));
    });
}
