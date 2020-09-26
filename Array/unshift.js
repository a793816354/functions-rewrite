Array.prototype.unshift = function(){
    let length = arguments.length

    this.length+=length
    for(let i=this.length-1;i>0;i--){
        this[i] = this[i-length]
    }
    
    for(let i=0;i<length;i++){
        this[i] = arguments[i]
    }
    return this.length
}

let arr = [1,2,3]
console.log(arr.unshift(4,5,6,7))  //7
console.log(arr)  
// [
//     4, 5, 6, 7,
//     1, 2, 3
// ] 