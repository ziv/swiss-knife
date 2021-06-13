import https from './https';

describe('https', () => {
    it('should get https url', async () => {
        const res = https.get('https://www.google.com');
        console.log(res);
    });
});
