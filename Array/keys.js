// Array.prototype.keys = function(){
//     let obj = {}
//     for(let i=0;i<this.length;i++){
//         obj[i] = this[i]
//     }
//         Object.defineProperties(obj,"length",{
//             value:this.length,
//             enumerable:true
//         })
//         return obj
// }

// console.log([1,2,3].keys())  Array Iterator
// 注意，需进一步了解Iterator