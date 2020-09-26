// 连接两个或多个字符串，返回连接后的字符串

let str ="hey"

// 相当于字符串相加了
String.prototype.concat = String.prototype.concat||function(){
    let tempStr = ""
    for(let i =0;i<arguments.length;i++){
        tempStr += arguments[i]
    }
    return this + tempStr
}

console.log(str.concat("yo","every","body"))
console.log(str.concat("yo","every",undefined))
console.log(str.concat("yo",2,undefined))
console.log(str.concat(false,2,undefined))
console.log(str.concat(null,2,undefined))

// 但是concat的缺点就是使用者必须是字符串，所以一般都会选择直接相加