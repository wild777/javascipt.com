"use strict";
// _transform方法
const Transform = require('stream').Transform;

class Love extends Transform {
    _transform(buf, encoding, next) {
        this.push(`I love ${buf.toString()}\n`);
        // 接收write字符串，字符串前加i love，形成模板
        next();
    }
}

var transform = new Love(3);
transform.on('data', data => process.stdout.write(data));
// transform监听到data事件，再把它以标准输出打印出来
transform.write('javascipt');
transform.write('node');
transform.write('wild');
transform.end();