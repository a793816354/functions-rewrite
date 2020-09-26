Array.prototype.lastIndexOf = function(item,start){
    if(!isNaN(start)){
        start = Number(start)
    }else{
        start=this.length-1
    }
    for(let i=start;i>=0;i--){
        if(this[i]===item){
            return i
        }
    }
    return -1
}

console.log([1,2,,4,5].lastIndexOf(4,2)) //-1