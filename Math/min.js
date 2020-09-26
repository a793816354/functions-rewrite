Math.min = function(){
    let min = arguments[0]
    for(let i=1;i<arguments.length;i++){
        if(arguments[i]<min){
            min = arguments[i]
        }
    }
    return min
}

console.log(Math.min(1,5,4,8,7,9)) //9,没有参数个数限制