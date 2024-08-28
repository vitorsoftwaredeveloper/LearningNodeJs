"use strict";
const arr = [1, 2, 3];

const buffer = Buffer.from(arr);

// console.log(buffer);

let a2 = new Uint8Array([1, 2, 5]);
let b2 = Buffer.from(a2);

// console.log(b2);

let b3 = Buffer.alloc(10);

// console.log(b3);

let b4 = Buffer.allocUnsafe(10);

// console.log(b4);

// CONVERSAO DE STRING EM BUFFER
const str = new Buffer("Este é um exemplo de buffer");

const json = JSON.stringify(str);
// {"type":"Buffer","data":[69,115,116,101,32,195,169,32,117,109,32,101,120,101,109,112,108,111,32,100,101,32,98,117,102,102,101,114]}

// CONVERSAO DE BUFFER EM STRING
let buf2 = new Buffer(JSON.parse(json).data);

buf2.toString();
// Este é um exemplo de buffer

const bufferEx = new Buffer(4);

bufferEx.writeUint8(0x63, 0);
bufferEx.writeUint8(0x61, 1);
bufferEx.writeUint8(0x74, 2);
bufferEx.writeUint8(0x73, 3);

console.log(bufferEx.toString());
