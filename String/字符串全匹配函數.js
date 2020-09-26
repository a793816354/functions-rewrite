//匹配長字符串的函數
let matchAll = function(str,sonStr){
    if(arguments.length>=2){
        if(typeof str==="string"&&typeof sonStr==="string"){
            let startIndex = NaN

            for(let i =0;i<str.length;i++){
                for(let j =0;j<sonStr.length;j++){
                    if(str[i]===sonStr[j]){
                        startIndex = i
                        break;
                    }
                }
                
                if(startIndex||startIndex===0){
                    break
                }
            }
            
            // 切割縂字符串，判斷是否與子字符串相等,由於寫原始方法，
            // 所以都用for循環
            if(startIndex||startIndex===0){
                let tempStr = ""
                for(let k =startIndex;k<startIndex+sonStr.length;k++){
                    tempStr+=str[k]
                }
                if(tempStr===sonStr){
                    return startIndex
                }else{
                    return -1
                }
            }else{
                return -1
            }
        }else{
            throw new Error("目前只支持字符串匹配")
        }
}else{
    throw new Error("少參數")
}
}

console.log(matchAll("orange","apple")) //-1
console.log(matchAll("orange","n")) //3
console.log(matchAll("orange","nge")) //3
console.log(matchAll("orange","ne")) //-1
console.log(matchAll("orange","o")) //0
console.log(matchAll("orange",3)) // "目前只支持字符串匹配"