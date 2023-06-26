import os from 'os';
import { dispCurrentDir } from '../../helper/index.js';

export const getUsername = async () => {
  try {
    const userInfo = await os.userInfo();
    const username = userInfo.username;
    console.log(`Current User Name: ${username}`);
    dispCurrentDir();
  } catch (error) {
    console.error('Operation failed');
    dispCurrentDir()
  }
};

