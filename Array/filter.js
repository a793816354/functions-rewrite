Array.prototype.filter = function(f){
    if(f&&typeof f === "function"){
        let arr = []
        for(let i=0;i<this.length;i++){
            if(i in this){
            if(f(this[i],i,this)){
                arr.push(this[i])
            }
        }
        }
        return arr
    }else{
        throw new Error("传函数")
    }
}

console.log([1,2,3].filter(item=>{
    return item>=2
}))