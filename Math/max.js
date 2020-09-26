Math.max = function(){
    let max = arguments[0]
    for(let i=1;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i]
        }
    }
    return max
}

console.log(Math.max(1,5,4,8,7,9)) //9,没有参数个数限制