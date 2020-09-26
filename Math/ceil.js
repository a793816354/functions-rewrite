Math.ceil = function(item){
    if(!isNaN(item)){
        let pointIndex =  Number(item).toString().indexOf(".")
        if(pointIndex!==-1){
            return Number(Number(item).toString().slice(0,pointIndex))+1
        }else{
            return Number(item)
        }
    }else{
        return NaN
    }
}

// 对数进行上舍入。
console.log(Math.ceil([6.58791])) //7
console.log(Math.ceil("8")) //8
console.log(Math.ceil(6.00000001)) //7
console.log(Math.ceil(NaN)) //NaN
console.log(Math.ceil()) //NaN