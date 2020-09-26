// @ searchElement  必须。需要查找的元素值。
// @ fromIndex 可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0
Array.prototype.includes = function(searchElement,fromIndex){
    if(searchElement!==undefined){
        if(!isNaN(fromIndex)){
            let num = Number(fromIndex)
            if(num<0){
                num = this.length+Number(fromIndex)
            }
            fromIndex = num
        }else{
            fromIndex = 0
        }

        for(let i=fromIndex;i<this.length;i++){
            if(this[i]===searchElement){
                return true
            }
            //特殊情况
            if(typeof this[i]==="number"&&this[i].toString()==="NaN"&&typeof searchElement==="number"&&searchElement.toString()==="NaN"){
                return true
            }
        }
        return false
    }else{
        throw new Error("必穿")
    }
}

console.log([1, 2, 3].includes(2));     // true
console.log([1, 2, 3].includes(4));     // false
console.log([1, 2, 3].includes(3,3));     // false
console.log([1, 2, 3].includes(3,-1));     // true
console.log([1, 2, NaN].includes(NaN));     // true