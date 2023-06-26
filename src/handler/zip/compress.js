import fs from 'fs';
import zlib from 'zlib';
import { dispCurrentDir } from '../../helper/index.js';
import { resolve } from 'path';

export async function compressFile(fileName, destinationPath) {
    const currentPath = resolve(process.cwd());
    const fullFilePath = resolve(currentPath, String(fileName));
    const fullDestinationPath = `${process.cwd()}/${destinationPath}.zip`;

    let hasReadError = false;

    try {
        await fs.promises.access(fullFilePath, fs.constants.F_OK);
    } catch (error) {
        console.error('Operation failed');
        return;
    }


        const readable = fs.createReadStream(fullFilePath);
        const writable = fs.createWriteStream(fullDestinationPath);

        const brotliOptions = {
        params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
        },
        };

        const compressStream = zlib.createBrotliCompress(brotliOptions);

        readable.pipe(compressStream).pipe(writable);
    try {
        await new Promise((resolve) => {
        readable.on('error', (error) => {
            console.error('Operation failed');
            hasReadError = true;
            writable.destroy();
            resolve();
        });

        writable.on('finish', () => {
            if (!hasReadError) {
            resolve();
            }
        });

        writable.on('error', (error) => {
            console.error('Operation failed');
            resolve();
        });
        });
    } catch (error) {
        console.error('Operation Failed');
    }
    dispCurrentDir();
}