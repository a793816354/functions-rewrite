// 改原，需注意

Array.prototype.reverse = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i])
    }

    for (let i = 0; i < arr.length; i++) {
        this[this.length-1-i] = arr[i]
    }
    return this
}


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse()
console.log(fruits)