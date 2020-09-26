Array.prototype.every = function (f) {
    if (f && typeof f === "function") {
        let sign = true
        for (let i = 0; i < this.length; i++) {
            if(i in this){
           if(!f(this[i], i, this)){
            sign = false
           }
        }
        }
        return sign
    } else {
        throw new Error("必须是函数")
    }
}

let arr = [2,3,10,15]


console.log(arr.every(item=>{
    return item>1
}))