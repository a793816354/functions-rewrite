let str = "orange"

String.prototype.slice = function(startIndex=0,endIndex){
    endIndex = endIndex||this.length

    let tempStr = ""
    for(let i=startIndex;i<endIndex;i++){
        tempStr+=this[i]||""
    }
    return tempStr
}

console.log(str.slice())
console.log(str.slice(2))
console.log(str.slice(2,4))
console.log(str.slice(2,8))
console.log(str.slice(-2,4))