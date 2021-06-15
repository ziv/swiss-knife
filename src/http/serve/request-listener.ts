import { IncomingMessage, ServerResponse } from 'http';
import { resolve } from 'path';
import { stat } from 'fs/promises';
import trim from '../../strings/trim';
import directory from './directory';
import file from './file';

const trimSlashes = trim('/');

/**
 * HTTP static handler
 * @param root
 * @param logger
 */
export default function requestListener(root: string, logger: Console) {
  return async (req: IncomingMessage, res: ServerResponse) => {
    const { method, url } = req;
    const trimmed = trimSlashes(url as string);
    const absolute = resolve(root, trimmed);

    logger.log({ type: 'access', method, url, absolute, ts: Date.now() });

    await stat(absolute)
      .then(s => s.isDirectory() ? directory(absolute, trimmed) : file(absolute))
      .then(s => s.pipe(res))
      .catch(e => {
        // todo improve error handling
        if (e.path && e.path.endsWith('favicon.ico')) {
          logger.log('Favicon not found');
        } else {
          logger.log('Error', e);
        }
        res.statusCode = 404;
        res.end();
      });
  };
}
