import { dispCurrentDir } from "../../helper/index.js";
import os from 'os';

export const cdHandler = async ([pathToDirectory]=[]) => {
    try{
        if (!pathToDirectory || pathToDirectory.length === 0){
            process.chdir(os.homedir())
        } else {
            process.chdir(pathToDirectory)
        }
        dispCurrentDir()
    } catch(err){
        console.error('Operation failed')
        dispCurrentDir()
    }   
}