Number.prototype.toPrecision = function (length) {
    if (Object.prototype.toString.call(length) === "[object Number]") {
        if (this.toString().indexOf(".") > -1) {
            return Number(this.toString().slice(0, length + 1))
        } else {
            return Number(this.toString().slice(0, length))
        }
    } else {
        throw new Error("必须为数字")
    }
}

console.log(new Number(101.78458).toPrecision(new Number(5)))