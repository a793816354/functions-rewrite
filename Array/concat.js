// 不改原
Array.prototype.concat = function () {
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            for (let j = 0; j < arguments[i].length; j++) {
                arr.push(arguments[i][j])
            }
        } else {
            arr.push(arguments[i])
        }
    }
    return arr
}

let arr = [1, 2, 3]

console.log(arr.concat([4,5],[],[6,7],[],"qwe",[9,10]))