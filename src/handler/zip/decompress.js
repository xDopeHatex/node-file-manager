import fs from 'fs';
import zlib from 'zlib';
import { dispCurrentDir } from '../../helper/index.js';


export async function decompressFile(filePath, destinationPath) {
    const fullFilePath = `${process.cwd()}/${filePath}`;
    const fullDestinationPath = `${process.cwd()}/${destinationPath}`;

    let hasReadError = false;

    try {
        await fs.promises.access(fullFilePath, fs.constants.F_OK);
    } catch (error) {
        console.error('Operation failed');
        return;
    }

    const readable = fs.createReadStream(fullFilePath);
    const writable = fs.createWriteStream(fullDestinationPath);

    const decompressStream = zlib.createBrotliDecompress();

    readable.pipe(decompressStream).pipe(writable);

    try {
        await new Promise((resolve, reject) => {
        writable.on('finish', () => {
            if (!hasReadError) {
            resolve();
            } else {
            reject(new Error('Operation failed'));
            }
        });

        writable.on('error', (error) => {
            reject(error);
        });
        });
    } catch (error) {
        console.error('Operation failed');
    }
        dispCurrentDir()
}