Math.abs = function(item){
    if(!isNaN(item)){
        if(Number(item)>=0){
            return Number(item)
        }else{
            return Number(Number(item).toString().slice(1))
        }
    }else{
        return NaN
    }
}

// 返回数的绝对值。
console.log(Math.abs([-10])) //10
console.log(Math.abs()) //NaN