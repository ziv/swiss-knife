import {sync as glob} from 'glob';
import {statSync} from 'fs';
import {basename} from 'path';
import {describe} from './describe';

export default function ls(globalPath: string) {
    return glob(globalPath)
        .map(path => {
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
