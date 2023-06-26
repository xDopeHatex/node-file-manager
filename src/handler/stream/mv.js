import { createReadStream, createWriteStream, unlink, access } from 'fs';
import { resolve, basename } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';
import { dispCurrentDir } from '../../helper/index.js';

const pipelineAsync = promisify(pipeline);
const accessAsync = promisify(access);
const unlinkAsync = promisify(unlink);

export const mvHandler = async (pathToFile, pathToNewDirectory) => {
  try {
    const fileName = basename(pathToFile);
    const sourcePath = resolve(process.cwd(), pathToFile);
    const destinationPath = resolve(process.cwd(), pathToNewDirectory, fileName);

    await accessAsync(sourcePath);

    try {
      await accessAsync(destinationPath);
      console.error('Destination directory does not exist');
      return;
    } catch (error) {
  
    }

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);


    await pipelineAsync(readStream, writeStream);


    await unlinkAsync(sourcePath);

    console.log('File moved successfully');
    dispCurrentDir();
  } catch (error) {
    console.error('Operation failed');
    dispCurrentDir();
  }
};
