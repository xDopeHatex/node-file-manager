import { createReadStream, createWriteStream, promises as fs } from 'fs';
import { resolve, basename, dirname } from 'path';
import { dispCurrentDir } from '../../helper/index.js';

export const cpHandler = async (pathToFile, pathToNewDirectory) => {
  try {
    const fileName = basename(pathToFile);
    const sourcePath = resolve(process.cwd(), pathToFile);
    const destinationPath = resolve(process.cwd(), pathToNewDirectory, fileName);
    const destinationDir = dirname(destinationPath);

    const fileExists = await fs.access(sourcePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      console.error('File does not exist');
      return;
    }

    const destinationDirExists = await fs.access(destinationDir)
      .then(() => true)
      .catch(() => false);

    if (!destinationDirExists) {
      console.error('Destination directory does not exist');
      return;
    }

    const fileInDestinationExists = await fs.access(destinationPath)
      .then(() => true)
      .catch(() => false);

    if (fileInDestinationExists) {
      console.error('Operation failed');
      return;
    }

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);

    await new Promise((resolve, reject) => {
      readStream.pipe(writeStream);

      readStream.on('error', reject);
      writeStream.on('error', reject);
      writeStream.on('finish', resolve);
    });

    console.log('File copied successfully');
    dispCurrentDir();
  } catch (error) {
    console.error('Operation failed');
    dispCurrentDir();
  }
};
