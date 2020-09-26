Array.prototype.push = function(item){
    this[this.length] = item
    return this.length
}
let arr = [1,2,3]

console.log(arr.push(4)) //4

console.log(arr) //[ 1, 2, 3, 4 ]