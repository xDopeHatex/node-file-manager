import { dispCurrentDir } from "../../helper/index.js";

export const clearHandler = () => {
    console.clear();
    console.log('Console cleared.');
    dispCurrentDir()
  };