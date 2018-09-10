//原型模式创建对象是共享属性和方法,可以减小开销
//构造函数创建对象是独立的属性和方法
function Person(name, age, job) { //构造函数挂载了name，age属性
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["shelby", "cort"];
}
Person.prototype = { //原型挂载了constructor，sayname方法，hobby属性
    constuctor: Person,
    sayName: function() {
        console.info(this.name);
    }
};
Person.prototype.hobby = "football";

var person1 = new Person("Nicholas", 29, "software engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.friends.push("van"); //push添加元素
console.info(person1.friends); //"shelby,count,van"
console.info(person1.friends === person2.friends); //false
console.info("hobby" in person1); //true，in方法判断hobby属性是否在person1对象上
person1.hobby = "basketball"; //改变hobby属性
console.info(person1.hasOwnProperty("hobby"));
//true，hasonwproperty判断hobby此时在原型上还是在实例上，hobby属性在实例上
delete person1.hobby; //删除实例属性hobby
console.info(person1.hasOwnProperty("hobby")); //false，hobby属性在原型上