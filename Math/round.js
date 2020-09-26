Math.floor = function(item){
    if(!isNaN(item)){
        let pointIndex =  Number(item).toString().indexOf(".")
        if(pointIndex!==-1){
            if(Number(Number(item).toString().slice(pointIndex))>=0.5){
                return Number(Number(item).toString().slice(0,pointIndex))+1
            }else{
                return Number(Number(item).toString().slice(0,pointIndex))
            }

            
        }else{
            return Number(item)
        }
    }else{
        return NaN
    }
}

// 对数进行下舍入
console.log(Math.floor([6.58791])) //7
console.log(Math.floor("8")) //8
console.log(Math.floor(6.00000001)) //6
console.log(Math.floor(NaN)) //NaN
console.log(Math.floor()) //NaN