import {createReadStream} from 'fs';

export default function file(path: string) {
    return createReadStream(path);
}
