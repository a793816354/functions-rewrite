//使用方式
let str = "school";

//自己写
String.prototype.charAt = String.prototype.charAt||function(){
    if(arguments[0]&&Number(arguments[0])){
        return this[Number(arguments[0])]
    }else{
        return this[0]
    }
}

console.log(str.charAt(2)) //h
console.log(str.charAt("2")) //h
console.log(str.charAt("")) //s
console.log(str.charAt("c")) //s
console.log(str.charAt("o")) //s
console.log(str.charAt([])) //s
console.log(str.charAt([2])) //h
console.log(str.charAt({})) //s
console.log(str.charAt(null)) //s
console.log(str.charAt(undefined)) //s
console.log(str.charAt()) //s
console.log(str.charAt(NaN)) //s
console.log(str.charAt(new Number(2))) //h
console.log(str.charAt(new String("2"))) //h
