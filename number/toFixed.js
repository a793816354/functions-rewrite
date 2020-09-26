// 返回指定小数位数的表示形式

Number.prototype.toFixed = function(length) {
    if (Object.prototype.toString.call(length) === "[object Number]"&&!isNaN(length)) {

        let numStr = this.toString()
        let numLength = numStr.length
        let pointIndex = numStr.indexOf(".")

        if(pointIndex>-1){
            if(numLength-pointIndex-1>=length){
            return numStr.slice(0,pointIndex+1+length)
            }else{
                for(let i=0;i<length-numLength+pointIndex+1;i++){
                    numStr+="0"
                }
                return numStr
            }
        }else{
            numStr +="."
            for(let i=0;i<length;i++){
                numStr+="0"
            }
            return numStr
        }
    } else {
        throw new Error("必须为数字")
    }
}

let a = 12
let b = 12.1
let c = 12.1234567

console.log(a.toFixed(3))
console.log(b.toFixed(3))
console.log(c.toFixed(6))