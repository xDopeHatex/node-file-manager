import { dispCurrentDir } from '../../helper/index.js';
import { resolve } from 'path';

export const upHandler = async () => {
    try {
        const currentPath = resolve(process.cwd());
        const rootPath = resolve('/');

        if (currentPath !== rootPath) {
            process.chdir('..');
            dispCurrentDir();
        } else {
            console.log('Already at the root directory');
        }
    } catch (error) {
        console.error('Operation failed');
    }
};
