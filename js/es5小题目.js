// 编写代码，实现下面三个要求
// 1、如果输入参数大于三个，返回最后一个参数。
// 2、如果输入参数小于三个且全部为数字，
// 则返回排序后的数组，如果最后一个数为奇数则降序排列，反之升序排列。
// 3、如果输入参数小于三个且包含字符串，则将所有参数强制转化为字符串并联接返回。
function myFunc() {
    if (arguLen > 3) { //第一种情况
        return arguments[arguLen - 1];
    } else if (arguLen < 3) {
        var numFlag = true; //用于判断是否均为数字
        var strFlag = false; //用于判断是否包含字符串
        for (var i = 0; i < arguLen; ++i) {
            if (typeof arguments[i] != "number") {
                numFlag = false;
            }
            if (typeof arguments[i] === "string") {
                strFlag = true;
                break;
            }
        }
        if (numFlag) { //第二种情况
            var args = [].slice.call(arguments, 0); //转成数组
            if (args[arguLen - 1] % 2 == 0) {
                return args.sort(function(a, b) { a - b; }); //升序
            } else {
                return args.sort(function(a, b) { b - a; }); //降序
            }
        } else if (strflag) { //第三种情况
            var result = "";
            for (var i = 0; i < arguLen; ++i) {
                result += String(arguments[i]);
            }
            return result;
        }
    }
    return;
}




//for循环中typeof arguments[i] != "number"有任意一个参数不是number就会false
//现在有numflag和strflag就会判断进入第二种还是第三种情况

//typeof arguments[i] === "string"其中有一个参数是字符串的话，就break掉

//第二种情况，在这用了数组原型的slice方法把它在arguments上调用
//就会把arguments对象转化为数组，arguments是一个像数组的对象
//在不把他转化为数组的前提下，是不能调用sort方法，升序排序方法

//判断最后一个元素是否为奇数

//当他发现strflag为true，进入第三种情况

//用string括起来arguments对应下标元素来进行强制类型转化，
//把参数转化为字符串，并用加的赋值表达式，把字符串进行拼接返回