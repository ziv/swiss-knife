import {IncomingMessage, ServerResponse} from 'http';
import {resolve} from 'path';
import {statSync} from 'fs';
import directory from './directory';

export const requestListener = (root: string) => (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url  || '';
    const relative = '/' === url ? '' : url;
    const absolute = resolve(root, relative);
    console.log({root, relative, absolute})
    // if no absolute or error, can't retrieve data about the path
    const stat = statSync(absolute);
    // if no stat, the path not exists

    if (stat.isDirectory()) {
        // send right headers and output
        // handle directory display
        res.end(directory(root));
        return;
    } else {
        // send fine to browser
        res.end(root);
        return;
    }
};
