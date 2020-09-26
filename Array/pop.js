Array.prototype.pop = function(){
    let lastItem = this[this.length-1]
    this.splice(this.length-1,1)
    return lastItem
}

let arr = [1,2,3]
console.log(arr.pop())
console.log(arr)