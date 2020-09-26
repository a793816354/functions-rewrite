// 删除并返回数组的第一个元素。

Array.prototype.shift = function () {
    let firstItem = this[0]
    this.splice(0,1)
    return firstItem
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift())
console.log(fruits)