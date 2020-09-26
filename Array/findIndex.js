// findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。

// findIndex() 方法为数组中的每个元素都调用一次函数执行：

// 当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
// 如果没有符合条件的元素返回 -1
// 注意: findIndex() 对于空数组，函数是不会执行的。

// 注意: findIndex() 并没有改变数组的原始值。

Array.prototype.findIndex = function(f){
    if (f && typeof f === "function") {
        for (let i = 0; i < this.length; i++) {
            if(i in this){
                if(f(this[i], i, this)){
                    return i
                   }
            }
        }
        return -1
    } else {
        throw new Error("必须是函数")
    }
}

console.log([4,6,9,12].findIndex(item=>{
    return item>7
}))  //2

console.log([4,6,9,12].findIndex(item=>{
    return item<3
}))  //-1