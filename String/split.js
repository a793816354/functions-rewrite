let str = "orange"


String.prototype.split = function (separator, howmany = this.length) {
    let strArr = []
    if (separator === "") {

        for (let i = 0; i < this.length; i++) {
            if (strArr.length < howmany) {
            strArr.push(this[i])
            }
        }
        return strArr
    } else {
        let indexArr = []
        let lastIndex = 0

        for (let i = 0; i < this.length; i++) {
            if (this[i] === separator) {
                indexArr.push(i)
            }
        }

        for (let j = 0; j < indexArr.length + 1; j++) {
            if (strArr.length < howmany) {
                let str = ""
                let index = indexArr[j] !== undefined ? indexArr[j] : this.length
                for (let k = lastIndex; k < index; k++) {

                    str += this[k]
                }

                strArr.push(str)
                lastIndex = indexArr[j] + 1
            }
        }

        let emptyMatchArr = []
        emptyMatchArr.push(this.toString())
        return strArr.length === 0 ? emptyMatchArr : strArr
    }
}

console.log(str.split(","))
console.log(str.split(""))
console.log(str.split(" "))
console.log("|sss|ww|".split(" "))
console.log("|sss|ww|".split("|"))
console.log("sss|ww".split(" "))
console.log("sss|ww".split("|"))
console.log(str.split("",2))
console.log(str.split("",4))
console.log("|sss|ww|".split("|",3))