// 检索字符串。
let str = "orange"

String.prototype.lastIndexOf = String.prototype.lastIndexOf||function(){
    let searchvalue = arguments[0];
    let fromindex = arguments[1];

    let endIndex = isNaN(Number(fromindex))?this.length-1:Number(fromindex)

    if(endIndex<=0){
        return -1
    }

    for(let i=endIndex;i>0;i--){
        if(this[i]===searchvalue){
            return i
        }
    }

    if(searchvalue!==null&&searchvalue!==undefined&&Number(searchvalue)===0&&parseInt(searchvalue)!==0){
        return this.length
    }

    return -1
}

console.log(str.lastIndexOf(2)) //-1
console.log(str.lastIndexOf("2")) //-1
console.log(str.lastIndexOf("")) //6
console.log(str.lastIndexOf(0)) //-1
console.log(str.lastIndexOf("0")) //-1
console.log(str.lastIndexOf("c")) //-1
console.log(str.lastIndexOf("a")) //2
console.log(str.lastIndexOf([])) //6
console.log(str.lastIndexOf([2])) //-1
console.log(str.lastIndexOf({})) //-1
console.log(str.lastIndexOf(null)) //-1
console.log(str.lastIndexOf(undefined)) //-1
console.log(str.lastIndexOf()) //-1
console.log(str.lastIndexOf(NaN)) //-1
console.log(str.lastIndexOf(new Number(2))) //-1
console.log(str.lastIndexOf(new String("2"))) //-1
console.log(str.lastIndexOf(999)) //-1
console.log(str.lastIndexOf("g",-1)) //-1
console.log(str.lastIndexOf("g",-3)) //-1
console.log(str.lastIndexOf("g",-999)) //-1
console.log(str.lastIndexOf("g",8)) //4
console.log(str.lastIndexOf("g",3)) //-1
console.log(str.lastIndexOf("g",4)) //4
console.log(str.lastIndexOf("g",5)) //4
console.log(str.lastIndexOf("g",)) //4
console.log(str.lastIndexOf("g",null)) //-1
console.log(str.lastIndexOf("g",false)) //-1
console.log(str.lastIndexOf("g",NaN)) //4
console.log(str.lastIndexOf("g",undefined)) //4
console.log(str.lastIndexOf("g",[])) //-1
console.log(str.lastIndexOf("g",[6])) //4
console.log(str.lastIndexOf("g",{})) //4
console.log(str.lastIndexOf("g","")) //-1
console.log(str.lastIndexOf("g","3")) //-1
console.log(str.lastIndexOf("g","6")) //4
console.log(str.lastIndexOf("g","qwe")) //4

// 第二个参数对数字，字符串，数组敏感


