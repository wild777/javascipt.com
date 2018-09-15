"use strict";
const fs = require('fs');
const path = require('path');
// 获取此文件所在文件夹的最大文件

function readDir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (er, files) => {
            if (er) {
                reject(er);
            } else {
                resolve(files);
            }
        });
    });
}


function fsStat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (er, stat) => {
            if (er) {
                reject(er);
            } else {
                resolve(stat);
            }
        });
    });
}


async function getLargestFile(dir) { //在获取最大文件的函数中，

    let files = await readDir(dir);
    // 用await他本身自带了一个切换机制
    let ps = [];
    files.forEach(file => {
        ps.push(fsStat(file));
    });

    let stats = await Promise.all(ps);

    let largest = stats
        .filter(stat => stat.isFile()) //计算最大的文件，先filter把文件过滤出去
        .reduce((prev, next) => prev.size > next.size ? prev : next);
    // 针对文件列表调用reduce，获取最大文件的下标

    return files[stats.indexOf(largest)];
}

getLargestFile('.').then(ret => console.info(ret));