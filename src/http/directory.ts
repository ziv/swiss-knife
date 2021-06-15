import {sync as glob} from 'glob';

const html = (title: string, path: string, items: string) => `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>${title}</title>
    </head>
    <body>
        <h1>Index of ${path}</h1>
        <ul>${items}</ul>
    </body>
</html>`;



export default function directory(root: string) {
    const items = '<li>' + glob(`${root}/*`).join('</li><li>') + '</li>';
    return html('title', 'oath', '');
}
