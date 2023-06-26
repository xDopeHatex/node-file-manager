import os from 'os';
import { dispCurrentDir } from '../../helper/index.js';

export const getHomeDir = async () => {
  try {
    const homeDir = os.homedir();
    console.log(`Home Directory: ${homeDir}`);
    dispCurrentDir();
  } catch (error) {
    console.error('Operation failed');
    dispCurrentDir()
  }
};