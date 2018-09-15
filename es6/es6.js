class Teacher1 {
    constructor() {
        this.name = "stefan";
    }

    getName() {
        return this.name;
    }
}

var teacher1 = new Teacher1();

console.info(Teacher1.prototype.constructor == Teacher1);
//true 说明原型上的constructor就是类本身这点和es5一致

class Wild extends Teacher1 {
    constructor(...args) {
        super(...args);
        //在子类需要调用super方法，执行一下父类构造函数
        this.weight = 180; //在这如果把this放到super前会报错，因为找不到this
        // 子类没有自己的this对象，他是通过继承父类的this，在上面加工生成自己的this
    }
}

var wild = new Wild();
console.info(wild.getName());
console.info(wild.weight);