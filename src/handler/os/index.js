import { getArchitecture } from "./architecture.js";
import { getCPUs } from "./cpus.js";
import { getEOL } from "./EOL.js";
import { getHomeDir } from "./homedir.js";
import { getUsername } from "./username.js";

export const osHandler = async (arg) =>{
    switch (String(arg)) {
        case '--EOL':
          getEOL();
          break;
        case '--cpus':
          getCPUs();
          break;
        case '--homedir':
          getHomeDir();
          break;
        case '--username':
          getUsername();
          break;
        case '--architecture':
          getArchitecture();
          break;
        default:
          console.log('Invalid command');
      }
}

