// 替换与字符串或者正则表达式匹配的子串,且第二個參數可以是函數，或者$1、$2、...、$99
// let str = "orange"
let str = "school"

// 先實現字符串換字符串
// String.prototype.replace = function(){
//     if(arguments.length>=2){
//         let substr = arguments[0]
//         let replacement = arguments[1]

//     }else{
//         throw new Error("少參數")
//     }
// }