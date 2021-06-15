import { createServer, Server } from 'http';
import requestListener from './serve/request-listener';

export interface HttpOptions {
  root: string;
  port: number;
  hostname: string;
  logger: Console;
}

const defaultOpts: HttpOptions = {
  root: process.cwd(),
  port: 8080,
  hostname: '0.0.0.0',
  logger: console
};

/**
 * Simple static HTTP server
 * - don't use in any production environment
 *
 * @param opts
 */
export default function serve(opts: Partial<HttpOptions> = {}): Server {
  const { root, port, hostname, logger } = { ...defaultOpts, ...opts };
  return createServer(requestListener(root, logger))
    .listen(port, hostname, () => logger.log({ status: 'listen', port, hostname, root }));
}

serve();
