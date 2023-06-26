import crypto from 'crypto'
import { promises as fs } from 'fs';
import { resolve } from 'path';
import { dispCurrentDir } from '../../helper/index.js';

export const hashHandler = async (fileName) => {
    try {
      const filePath = resolve(process.cwd(), String(fileName));
      const data = await fs.readFile(filePath);
      const hash = crypto.createHash('sha256').update(data);
      const hashValue = hash.digest('hex');
      console.log(hashValue);
      dispCurrentDir();
    } catch (error) {
      console.error('Operation failed');
      dispCurrentDir();
    }
  };
