Array.prototype.slice = function (start = 0, end = this.length) {
    if (!isNaN(start) && !isNaN(end)) {
        if (Number(start) < 0) {
            start = this.length + Number(start)
        } else {
            start = Number(start)
        }
        let arr = []
        for (let i = start; i < Number(end); i++) {
            arr.push(this[i])
        }
        return arr
    } else {
        throw new Error("传数字")
    }
}

console.log([1, 2, 3].slice())  //[ 1, 2, 3 ]


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1,3)) //[ 'Orange', 'Lemon' ]