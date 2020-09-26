Array.prototype.forEach = function(f){
    if(f&&typeof f==="function"){
        for(let i=0;i<this.length;i++){
            if(i in this){
                f(this[i],i,this)
            }
        }
    }else{
        throw new Error("第一个参数为函数且必穿")
    }
}

let arr = [1,2,3];
arr.forEach((item,index)=>{
    console.log(item+index)
})
