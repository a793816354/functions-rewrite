let matchAll = function (str, sonStr) {
    if (arguments.length >= 2) {
        if (Object.prototype.toString.call(str) === "[object String]" &&
            Object.prototype.toString.call(sonStr) === "[object String]") {
            let startIndex = NaN

            for (let i = 0; i < str.length; i++) {
                for (let j = 0; j < sonStr.length; j++) {
                    if (str[i] === sonStr[j]) {
                        startIndex = i
                        break;
                    }
                }

                if (startIndex || startIndex === 0) {
                    break
                }
            }

            // 切割縂字符串，判斷是否與子字符串相等,由於寫原始方法，
            // 所以都用for循環
            if (startIndex || startIndex === 0) {
                let tempStr = ""
                for (let k = startIndex; k < startIndex + sonStr.length; k++) {
                    tempStr += str[k]
                }
                if (tempStr === sonStr) {
                    return startIndex
                } else {
                    return -1
                }
            } else {
                return -1
            }
        } else {
            throw new Error("目前只支持字符串匹配")
        }
    } else {
        throw new Error("少參數")
    }
}



// 检索字符串。
let str = "orange"

String.prototype.indexOf = String.prototype.indexOf||function () {
    let searchvalue = arguments[0];
    let fromindex = arguments[1];

    let startIndex = isNaN(Number(fromindex)) ? 0 : Number(fromindex)

    if (startIndex > this.length) {
        return -1
    }

    let oneString = ""
    for (let i = startIndex; i < this.length; i++) {
        oneString += searchvalue[i]
    }

    if (oneString) {
        return matchAll(this, searchvalue)
    }


    if (searchvalue !== null && Number(searchvalue) === 0 && parseInt(searchvalue) !== 0) {
        return 0
    }

    return -1
}

// console.log(str.indexOf(2)) //-1
// console.log(str.indexOf("2")) //-1
// console.log(str.indexOf("")) //0
// console.log(str.indexOf(0)) //-1
// console.log(str.indexOf("0")) //-1
// console.log(str.indexOf("c")) //-1
// console.log(str.indexOf("a")) //2
// console.log(str.indexOf([])) //0
// console.log(str.indexOf([2])) //-1
// console.log(str.indexOf({})) //-1
// console.log(str.indexOf(null)) //-1
// console.log(str.indexOf(undefined)) //-1
// console.log(str.indexOf()) //-1
// console.log(str.indexOf(NaN)) //-1
// console.log(str.indexOf(new Number(2))) //-1
// console.log(str.indexOf(new String("2"))) //-1
// console.log(str.indexOf(999)) //-1
// console.log(str.indexOf("g",-1)) //4
// console.log(str.indexOf("g",-3)) //4
// console.log(str.indexOf("g",-999)) //4
// console.log(str.indexOf("g",8)) //-1
// console.log(str.indexOf("g",3)) //4
// console.log(str.indexOf("g",4)) //4
// console.log(str.indexOf("g",5)) //-1
// console.log(str.indexOf("g",)) //4
// console.log(str.indexOf("g",null)) //4
// console.log(str.indexOf("g",false)) //4
// console.log(str.indexOf("g",NaN)) //4
// console.log(str.indexOf("g",undefined)) //4
// console.log(str.indexOf("g",[])) //4
// console.log(str.indexOf("g",[6])) //-1
// console.log(str.indexOf("g",{})) //4
// console.log(str.indexOf("g","")) //4
// console.log(str.indexOf("g","3")) //4
// console.log(str.indexOf("g","6")) //-1
// console.log(str.indexOf("g","qwe")) //4

// 第二个参数对数字，字符串，数组敏感

// 注意，有缺陷，長字符串需要全匹配