"use strict";
const fs = require('fs'); // fs模块

// 获取文件信息
// console.info(fs.readdirSync('.'));
// //同步阻塞式的方法，可以保证顺序，sync会等读取文件完成，做接下来的操作
// console.info(fs.statSync('./find.js'));

// ---------------------------
// 异步获取文件信息
// fs.readdir('.', (err, files) => {
//     console.log(files);
// });

// fs.stat('./find.js', (err, stat) => {
//     console.log(stat);
// });

// -------------------------------
// 复制文件
let readable = fs.createReadStream('./src.txt');
let writable = fs.createWriteStream('./target.txt');

readable.pipe(writable);
// 把可读流中的东西pipe到可写流中, 相当于一个复制操作