import { createServer } from 'http';
import { requestListener } from './http/request-listener';

export interface HttpOptions {
  root: string;
  port: number;
  hostname: string;
}

const defaultOpts = {
  root: process.cwd(),
  port: 8080,
  hostname: 'localhost'
};

export default function http(opts: Partial<HttpOptions> = {}) {
  const { root, port, hostname } = { ...defaultOpts, ...opts };
  return createServer(requestListener(root)).listen(port, hostname);
}

http();
