import { promises as fs} from 'fs';
import { resolve } from "path"
import { dispCurrentDir } from '../../helper/index.js';

export const lsHandler = async (pathDir) => {
    try {
        let currentPath
        if (pathDir){
            currentPath = resolve(process.cwd(), String(pathDir));
        } else {
            currentPath = resolve(process.cwd());
        }        

        const files = await fs.readdir(currentPath);
        const fileList = [];
        const folders = [];
        const sortedFiles = [];
        for (const file of files) {
            const filePath = resolve(currentPath, file);
            const stats = await fs.stat(filePath);
            const fileType = stats.isFile() ? 'File' : 'Directory';
            
            const fileInfo = {
                Name: file,
                Type: fileType,
              };
        
              if (stats.isDirectory()) {
                folders.push(fileInfo);
              } else {
                sortedFiles.push(fileInfo);
              }
        }
        sortedFiles.sort((a, b) => a.Name.localeCompare(b.Name));
        folders.sort((a, b) => a.Name.localeCompare(b.Name));
    
        fileList.push(...folders, ...sortedFiles);

        console.info(currentPath)
        console.table(fileList, ['Name', 'Type']);
        dispCurrentDir();
    } 
    catch(err) {
        console.error('Operation failed')
        dispCurrentDir();
    }
};