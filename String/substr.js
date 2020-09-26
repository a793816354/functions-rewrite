let str = "orange"

String.prototype.substr = function(startIndex,length=this.length-startIndex){
    if(startIndex&&Object.prototype.toString.call(startIndex)==="[object Number]"&&Object.prototype.toString.call(length)==="[object Number]"){
            let endIndex =(startIndex+length)<this.length?startIndex+length :this.length
            let str = ""
            for(let i=startIndex;i<endIndex;i++){
                str+=this[i]
            }
            return str
    }else{
        throw new Error("第一个参数必传且为数字")
    }
}

console.log(str.substr())//报错
console.log(str.substr("1"))//报错
console.log(str.substr(10))//range
console.log(str.substr(1,10))//range
console.log(str.substr(1,4))
console.log(str.substr(1,1))
console.log(str.substr(1,5))
console.log(str.substr(1,6))