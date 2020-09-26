Array.isArray = function(){
    return Object.prototype.toString.call(arguments[0])==="[object Array]"
}

let test = function(){
    console.log(Array.isArray(arguments))  //false
}
test(1,2)

// 注意，类数组不能通过Array.isArray的判断