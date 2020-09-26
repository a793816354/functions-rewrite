Array.prototype.entries = function(){
    let obj = {}
    for(let i=0;i<this.length;i++){
        obj[i] = this[i]
    }
    return obj
}

let arr = ["name","age","hobit"]
console.log(arr.entries())