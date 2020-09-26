// 总结：基础类型除了0，都返回NaN，对象也是，但数组先看第一项，在转

let num = 10;
parseFloat = function () {
    let type = Object.prototype.toString.call(arguments[0])
    if (type === "[object Number]") {
        return arguments[0]
    } else if (arguments[0]&&type === "[object String]") {
         // 1.正则
         let str = arguments[0].trim()
         let matchNum = str.match(/^-?\d+(\.\d+)?/g)?str.match(/^-?\d+(\.\d+)?/g)[0]:NaN
        return matchNum
       
        //2.字符类型判断
        // for (let i = 0; i < arguments[0].length; i++) {

        // }
    } else if (Array.isArray(arguments[0])) {
        return arguments.callee(arguments[0][0])
   } else {
        return NaN
    }
}

console.log(parseFloat("   12.777qewqewq11")) //12.777