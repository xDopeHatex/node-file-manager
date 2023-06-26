import { promises as fs } from "fs";
import { resolve } from "path";
import { dispCurrentDir } from "../../helper/index.js";

export const rmHandler = async (fileName) => {
  try {
    const filePath = resolve(resolve(process.cwd()), String(fileName));

    await fs.access(filePath, fs.constants.F_OK);

    await fs.unlink(filePath);
    dispCurrentDir();
  } catch (err) {
    console.error("Operation failed");
    dispCurrentDir();
  }
};
