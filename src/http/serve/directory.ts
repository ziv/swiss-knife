import {fromString} from '../../streams';
import {ls} from '../../fs';
import {trimRight} from '../../strings';

const trimSlash = trimRight('/');

const html = (path: string, items: string) => {
    const up = path ? `           <a href="/${trimSlash(path)}/../">UP</a>\n` : '';
    return `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Index of /${path}</title>
    </head>
    <body>
        <h1>Index of /${path}</h1>
        <pre>${up}${items}</pre>
    </body>
</html>`;
}

const liner = (relative: string) => (item) => {
    const {name, perms} = item;
    const href = (relative ? `/${relative}` : '') + (name ? `/${name}` : '');
    return `${perms} <a href="${href}">${name}</a>`;
}

export default function directory(root: string, relative: string) {
    const items = ls(`${root}/*`).map(liner(relative)).join('\n');
    return fromString(html(relative, items));
}
