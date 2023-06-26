import { dispCurrentDir } from "./currentDir.js";

export const inputCommand = (input, myEmitter, rl) => {
  const [command, ...args] = input.split(' ');
  const command_list = ['ls', 'cd', 'up', 'cat', 'add', 'rm', 'rn','cp','mv','.exit', 'os', 'hash', 'compress', 'decompress', 'clear'];

  if (command_list.includes(command)) {
    if (args.length === 1)  {
      myEmitter.emit(command, args);
    }else if (command === 'os') {
      myEmitter.emit(command, args[0]);
    }else if (command === '.exit') {
      rl.close();
    } else {
      myEmitter.emit(command, ...args);
    }
  } else {
    console.error('Invalid input');
    dispCurrentDir()
  }
};
