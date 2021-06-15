import {IncomingMessage, ServerResponse} from 'http';
import {resolve} from 'path';
import {statSync} from 'fs';
import trimLeft from '../../strings/trim-left';
import directory from './directory';
import file from './file';

const trimSlash = trimLeft('/');

export default function requestListener(root: string) {
    return (req: IncomingMessage, res: ServerResponse) => {
        const relative = trimSlash(req.url as string);
        const absolute = resolve(root, relative);

        console.log({relative, absolute})
        try {
            (statSync(absolute).isDirectory() ? directory(absolute, relative) : file(absolute)).pipe(res);
        } catch (e) {
            if (e.path && e.path.endsWith('favicon.ico')) {
                // ignore error
            } else {
                // todo handle errors
                console.log(e);
            }
            res.statusCode = 404;
            res.end();
        }
    };
}
