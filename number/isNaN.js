
isNaN = function() {
    return Number(arguments[0]).toString()==="NaN"
    //注意，NaN===NaN  //false
}

console.log(isNaN(""))  //0
console.log(isNaN("3"))  //3
console.log(isNaN(0))  //0
console.log(isNaN(-0))  //-0
console.log(isNaN(null))  //0 注意
console.log(isNaN(false))  //0
console.log(isNaN(undefined))  //NaN
console.log(isNaN(NaN))  //NaN

console.log(isNaN("ss"))  //NaN
console.log(isNaN({}))  //NaN
console.log(isNaN({name:"ss"}))  //NaN
console.log(isNaN([]))  //0  注意
console.log(isNaN([0]))  //0  注意
console.log(isNaN([33]))  //33  注意
console.log(isNaN([1,2]))  //NaN


console.log(isNaN(new Number(2)) ) //2
console.log(isNaN(new String("2")) ) //2

