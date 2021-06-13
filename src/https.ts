import {RequestOptions, request} from 'https';

function https(url: string, options: RequestOptions = {}, data?: string) {
    return new Promise((resolve, reject) => {
        let body = '';

        if (data) {
            options.headers = {
                ...options.headers,
                'Content-Length': data.length
            }
        }

        const req = request(url, options, res => {
            res.on('data', chunk => body += chunk);
            res.on('end', () => resolve(body));
        });

        req.on('error', reject);
        if (data) {
            req.write(data);
        }
        req.end();
    });
}

https.get = (url: string, options: RequestOptions = {}) =>
    https(url, {...options, method: 'GET'})

https.post = (url: string, data: string, options: RequestOptions = {}) =>
    https(url, {...options, method: 'POST'}, data);

export default https;
