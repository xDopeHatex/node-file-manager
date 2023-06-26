import os from 'os';
import { dispCurrentDir } from '../../helper/index.js';

export const getEOL = async () => {
  try {
    let eol = '';
    if (os.platform() === 'darwin') {
      eol = '\\n'
    } else {
      eol = '\\r\n';
    }
    console.log(`Default system End-Of-Line (EOL): ${eol}`);
    dispCurrentDir();
  } catch (error) {
    console.error('Operation failed');
    dispCurrentDir()
  }
};