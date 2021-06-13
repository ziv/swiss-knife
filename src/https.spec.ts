import https from './https';

// todo replace with test server
const url = 'https://www.google.com';

describe('https', () => {
    it('should request https url', async () => {
        expect(await https(url)).toBeTruthy();
    });

    it('should get https url', async () => {
        expect(await https.get(url)).toBeTruthy();
    });

    it('should post https url', async () => {
        expect(await https.post(url, 'data')).toBeTruthy();
    });
});
