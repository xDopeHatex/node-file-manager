import * as dir from './dir/index.js';
import * as stream from './stream/index.js';
import * as basic from './basic/index.js';
import * as hash from './hash/index.js';
import * as zip from './zip/index.js';



export const lsHandler = dir.lsHandler;
export const cdHandler = dir.cdHandler;
export const upHandler = dir.upHandler;
export const clearHandler = dir.clearHandler;


export const addHandler = basic.addHandler;
export const rmHandler = basic.rmHandler;
export const rnHandler = basic.rnHandler;

export const cpHandler = stream.cpHandler;
export const mvHandler = stream.mvHandler;
export const catHandler = stream.catHandler;

export const hashHandler = hash.hashHandler;

export const compressFile = zip.compressFile;
export const decompressFile = zip.decompressFile;

