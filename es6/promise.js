"use strict";
const fs = require('fs');
const path = require('path');
// 获取此文件所在文件夹的最大文件

// promise工具方法reafdir,fsStat
//实例化promise对象，在promise函数的参数中的函数去resolve最终的结果
function readDir(path) {
    return new Promise((resolve, reject) => { //读取目录所有文件
        fs.readdir(path, (er, files) => {
            if (er) {
                reject(er);
            } else {
                resolve(files); //读取出文件列表，就resolve
            }
        });
    });
}

function fsStat(path) { //获取文件状态
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

function getLargestFile(dir) { //在获取最大文件的函数中，

    let files;

    return readDir(dir)
        // 调用reaDdir，上面有一个then方法，成功的话返回文件列表
        .then(fs => {
            let ps = [];
            files = fs;
            fs.forEach(file => {
                ps.push(fsStat(file));
            });
            return Promise.all(ps); //******成功的话返回文件列表，对文件列表进行处理
            // 这的promise.all构建了一个ps数组，他把所有fsStat结果push到这个数组，数组里放一堆promise对象
            //promise.all，就是当所有promise执行完以后
        })
        .then(stats => {
            let largest = stats //这拿到的列表是，promise.all执行完的列表
                .filter(stat => stat.isFile())
                .reduce((prev, next) => prev.size > next.size ? prev : next); //获取最大文件下标
            return files[stats.indexOf(largest)];
        });
}

getLargestFile('.').then(ret => console.info(ret));