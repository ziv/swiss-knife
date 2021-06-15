import { sync as glob } from 'glob';
import { statSync } from 'fs';
import { basename } from 'path';
import describe from './describe';

export interface LsResult {
  path: string;
  name: string;
  perms: string;
}

export default function ls(globalPath: string): LsResult[] {
  return glob(globalPath).map(path => {
    const stat = statSync(path);
    return {
      path,
      // size: stat.size,
      // dir: stat.isDirectory(),
      name: basename(path),
      perms: describe(stat)
    };
  });
}
