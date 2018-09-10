// 把属性通过借用构造函数继承，把方法通过原型链方式继承,减小开销
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
    console.info(this.name);
};
SuperType.prototype.hobby = "basketball";

function SubType(name, age) {
    SuperType.call(this, name); //让父类的构造函数在子类的构造函数上去调用，name把子类属性传进来
    this.age = age; //添加子类自有的属性
}

// SubType.prototype = new SuperType(); //子类原型指向父类构造函数实例，下面三行代码替换这行代码
function F() {}
F.prototype = SuperType.prototype; // 把空函数F实例化，
SubType.prototype = new F(); // 实例化的结果给子类原型
//这样方式少调用了一次针对父类构造函数的实例化，并且冗余属性不会出现在子类构造函数上

SubType.prototype.constructor = SubType; //子类原型上的constructor指向子类，矫正一下原型里的constructor
SubType.prototype.sayAge = function() {
    console.info(this.age);
};

var instance1 = new SubType("Nicholas", 12); //实例化子类对象
var instance2 = new SubType("Greg", 17);
instance1.colors.push("black");
console.info(instance1.colors); //"red,blue,green,black"
instance1.hobby = "football";
console.info("hobby" in instance1, instance1.hasOwnProperty("hobby")); //true true
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //12
console.info(instance1.colors); //"red,blue,green,"
instance1.sayName(); //"Greg";
instance1.sayAge(); //17
console.info(instance2.hasOwnProperty("hobby"));