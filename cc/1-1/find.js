"use strcit";
// 一个查找的工具,文件名是否满足正则表达式
const reg = process.argv[2]; //这个查找工具，接收正则表达式，和要去查找的目标文件夹
const path = process.argv[3];
// 把这个文件夹下所有可以匹配到正则表达式的文件的路径，放到一个数组里返回
if (!reg || !path) {
    console.info('error!');
    return;
}

const fs = require('fs');
const join = require('path').join;

function findSync(reg, spath) { //核心代码
    let results = [];

    function find(path) { //递归查询函数find，读取一个文件
        var files = fs.readdirSync(path);
        files.forEach(file => {
            let fpath = join(path, file);
            let stat = fs.statSync(fpath);

            if (stat.isDirectory()) find(fpath); //是子文件夹的话，进去下一步的递归
            if (stat.isFile() && reg.test(file)) results.push(fpath); //是文件的话判断文件名是否满足正则表达式，满足的话push到结果
        })
    }
    find(spath);
    return results; //最后返回回来
}

console.info(findSync(new RegExp(reg), path));

// node find 1.* .