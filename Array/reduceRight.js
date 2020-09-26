Array.prototype.reduceRight = function(f,total=this[this.length-1]){
    if(f&&typeof f === "function"){
        if(this.length!==0){
            for(let i=this.length-2;i>=0;i--){
                total = f(total,this[i],i,this)
            }
            return total
        }else{
            throw new Error("Reduce of empty array with no initial value")
        }
    }else{
        throw new Error("传函数")
    }
}

var numbers = [65, 44, 12, 4];
 
function getSum(total, num) {
    return total + num;
}
console.log(numbers.reduceRight(getSum)) //125 