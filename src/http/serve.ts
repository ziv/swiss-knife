import { createServer, Server } from 'http';
import requestListener from './serve/request-listener';

export interface HttpOptions {
  root: string;
  port: number;
  hostname: string;
}

const defaultOpts = {
  root: process.cwd(),
  port: 8080,
  hostname: '0.0.0.0'
};

export default function serve(opts: Partial<HttpOptions> = {}): Server {
  const { root, port, hostname } = { ...defaultOpts, ...opts };
  return createServer(requestListener(root)).listen(port, hostname);
}
