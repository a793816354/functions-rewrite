Array.prototype.fill = function(){
    for(let i=0;i<this.length;i++){
        this[i] = arguments[0]
    }
}
let arr = [1,2,3]
arr.fill("name")
console.log(arr)//[ 'name', 'name', 'name' ]