let str = "     orange   "

//因为只是其头去尾，所以还不能用for循环，可以用正则表达式
// 1.取出内容
String.prototype.trim = function(){
    return this.replace(/^\s*(.*)\s*$/g,"$1")
}

// 2.筛去两边空格
String.prototype.trim = function(){
    return this.replace(/^\s*|\s*$/g,"")
}
console.log(str.trim())
