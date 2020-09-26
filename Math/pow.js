Math.pow = function(x,y){
    if(!isNaN(x)&&!isNaN(y)){
        let result = 1
        for(let i=0;i<Number(y);i++){
            result*=Number(x)
        }
        return result
    }else{
        return NaN
    }
}

console.log(Math.pow([2],"4")) //16