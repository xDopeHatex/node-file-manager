export function dispCurrentDir() {
    const currentDirectory = process.cwd();
    console.info('You are currently in', currentDirectory);
  }
