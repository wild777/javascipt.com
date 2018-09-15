// -------class

class Teacher1 {
    constructor() {
        this.name = "stefan";
    }

    getName() {
        return this.name;
    }
}

var teacher1 = new Teacher1();


// -------------------------
// es5的方法
function Teacher(options) {
    var options = options || {};
    this.name = options.name || 'stefan';
}

Teacher.prototype.getName = function() {
    return this.name;
};

var teacher = new Teacher();

console.info(Object.keys(Teacher.prototype)); //['getName']
console.info(Object.keys(Teacher1.prototype)); //[]
// 用object.keys，teacher可以打印出getName方法
// teacher1不行  class定义方法属性不可被枚举便利的