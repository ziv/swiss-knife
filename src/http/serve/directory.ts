import { fromString } from '../../streams';
import ls from '../../fs/ls';

export const template = (path: string, items: string) => `
<!doctype html>
<html lang='en'>
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width'>
        <title>Index of ${path || '/'}</title>
    </head>
    <body>
        <pre>
<!-- start -->
<h1>Index of ${path || '/'}</h1>
${path ? `           <a href='/${path}/..'>UP</a>` : ''}
${items}
<!-- end -->
      </pre>
    </body>
</html>`;


export default function directory(root: string, url: string) {
  const path = url ? `/${url}` : url;
  const list = ls(`${root}/*`)
    .map(({ name, perms }) => `${perms} <a href='${path}/${name}'>${name}</a>`)
    .join('\n');
  return fromString(template(url, list));
}
