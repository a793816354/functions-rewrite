// 总结：基础类型除了0，都返回NaN，对象也是，但数组先看第一项，在转

let num = 10;
parseInt = function () {
    let type = Object.prototype.toString.call(arguments[0])
    if (type === "[object Number]") {
        return arguments[0]
    } else if (arguments[0]&&type === "[object String]") {
         // 1.正则
         let str = arguments[0].trim()
         let matchNum = str.match(/^-?\d+/g)?str.match(/^-?\d*/g)[0]:NaN
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

console.log(parseInt("   12qewq11")) //12
console.log(parseInt(""))  //NaN,注意
console.log(parseInt("0"))  //0,注意
console.log(parseInt(0))  //0
console.log(parseInt(-0))  //0,注意
console.log(parseInt(null))  //NaN
console.log(parseInt(undefined))  //NaN
console.log(parseInt(NaN))  //NaN
console.log(parseInt(false))  //NaN

console.log(parseInt("ss"))  //NaN
console.log(parseInt({}))  //NaN
console.log(parseInt({ name: "ss" }))  //NaN
console.log(parseInt([]))  //NaN
console.log(parseInt([0]))  //0，注意，将数组转为字符串，以逗号分隔
console.log(parseInt([1, 2]))  //1
console.log(parseInt(new Number(2)))  //2
console.log(parseInt("  23ewq"))  //23  //有左trim
console.log(parseInt(["  ", "", 1, 23, "4", "qew", 5]))  //NaN
console.log(parseInt(["", 1, 23, "4", "qew", 5]))  //NaN  
console.log(parseInt(["-8"]))  //-8
console.log(parseInt([0]))  //  0
console.log(parseInt([10]))  //10
console.log(parseInt([10, 12]))  //10
console.log(parseInt([-6, 12]))  //-6
console.log(parseInt([[["  12ewqewq"]]]))  //12
