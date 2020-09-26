Array.prototype.some = function(f){
    if(f&&typeof f === "function"){
        for(let i=0;i<this.length;i++){
            if(f(this[i],i,this)){
                return true
            }
        }
        return false
    }else{
        throw new Error("传函数")
    }
}

var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

console.log(ages.some(checkAdult)) //true