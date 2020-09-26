// find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。

// find() 方法为数组中的每个元素都调用一次函数执行：

// 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
// 如果没有符合条件的元素返回 undefined
// 注意: find() 对于空数组，函数是不会执行的。

// 注意: find() 并没有改变数组的原始值。

// 所以用find返回的结果尽量是bool

Array.prototype.find = function(f){
    if (f && typeof f === "function") {
        for (let i = 0; i < this.length; i++) {
            if(i in this){
           if(f(this[i], i, this)){
            return this[i]
           }
        }
        }
    } else {
        throw new Error("必须是函数")
    }
}

console.log([1,2,3].find(item=>{
    return item>2
}))
