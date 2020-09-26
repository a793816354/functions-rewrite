// @separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

Array.prototype.join = function(separator=","){
    let str = ""
            for(let i=0;i<this.length;i++){
                str+=""+this[i]
                if(i!==this.length-1){
                    str+=separator
                }
            }
            return str
}
let a = [1,2,3,,5,6,"","8",9]
console.log(a.join('|')) //1,2,,4,6