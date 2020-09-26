// from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。

// 如果对象是数组返回 true，否则返回 false。

// 用法：Array.from(object, mapFunction, thisValue)   需注意！！

Array.from = function (object, mapFunction = value => value, thisValue) {
    if (object !== undefined) {
        //引用类型
        if (typeof object === "object" && object.length && Object.prototype.toString.call(object.length) === "[object Number]") {
            let length = Number(object.length)
            let arr = []
            for (let i = 0; i < length; i++) {
                arr.push(mapFunction(object[i]))
            }
            return arr
        } else {
            return []
        }
    } else {
        throw new Error("必传")
    }
}


let obj = { 0: 7, 1: 8, 2: 9, name: "name", 3: 10, length: 10 }
console.log(Array.from(obj))
// 输出:
//[
//       7,         8,
//   9,         10,
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined
//   ]

console.log(Array.from(obj,item=>item*10))
// 输出:
// [
//     70,  80,  90, 100,
//    NaN, NaN, NaN, NaN,
//    NaN, NaN
//  ]


let transArgToArr = function(data){
    return Array.from(data)
}
 
let test= function() {
    console.log(transArgToArr(arguments))
}

test(1,2,3,4,5,6)