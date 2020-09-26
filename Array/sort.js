//小写大于大写
console.log("a" > "A")  //true
console.log("a" > "z")  //false
console.log("a" > "Z")  //true

//数字和字母比较起来都是false
console.log("a" > 100)  //false
console.log("a" > 0)  //false
console.log("a" > -111111)  //false
console.log(-111111 > "a")  //false

console.log(["a", "A", 100, 11, "Z", "z", 33].sort())
//[
//     100, 11,  33,
//     'A', 'Z', 'a',
//     'z'
//   ]
//   默认sort内处理是字母大于数字
// 使用数字排序，你必须通过一个函数作为参数来调用!!!

// 所以sort不传的话只对字母进行排序
// a-b为升序

Array.prototype.sort = function (f) {
    if (f && typeof f === "function") {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (f(this[j],this[i] ) > 0) {
                    let temp = this[j]
                    this[j] = this[i]
                    this[i] = temp
                }
            }
        }

    } else {
        //不细处理了，大概思路：空数组a收集英文，原数组去掉，将a排序，再类似concat 插入尾部
    }
}

var points = [40,100,1,5,25,10];
points.sort(function(a,b){return a-b}); //[ 1, 5, 10, 25, 40, 100 ]
console.log(points)

// 牢记:a-b升