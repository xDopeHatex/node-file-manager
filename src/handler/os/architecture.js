import os from 'os';
import { dispCurrentDir } from '../../helper/index.js';

export const getArchitecture = async () => {
  try {
    const architecture = os.arch();
    console.log(`CPU Architecture: ${architecture}`);
    dispCurrentDir()
  } catch (error) {
    console.error('Operation failed');
    dispCurrentDir()
  }
};

