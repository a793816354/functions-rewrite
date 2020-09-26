// @ item  必须。需要查找的元素值。
// @ start 可选。从该索引处开始查找 item
//都先不考虑不规范类数组了

Array.prototype.indexOf = function(item,start=0){
    if(item||!isNaN(item)){
        if(start<=this.length){
            for(let i=start;i<this.length;i++){
                if(this[i]===item){
                    return i
                }
            }
            return -1
        }else{
            return -1
        }
    }else{
        return -1
    }
}

let fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple"];
console.log(fruits.indexOf("Apple")) //2
console.log(fruits.indexOf("Apple",4)) //6
console.log(fruits.indexOf("Apple",10)) //-1
console.log(fruits.indexOf("Apple",-10)) //-2