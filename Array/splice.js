//JavaScript通过设置数组的length属性来截断数组是惟一一种缩短数组长度的方法.

Array.prototype.splice = function (index,howmany) {
    if(!isNaN(index)){
        for(let i=0;i<this.length;i++){
            if(Number(index)===i){
                let length =this.length-Number(index)
                if(!isNaN(howmany)){
                    length = howmany
                }else{
                    throw new Error("数字")
                }

                for(let j=Number(index);j<Number(index)+length;j++){
                    //左移
                    for(let k=Number(index)+1;k<this.length;k++){
                            this[k-1] = this[k]
                    }
                    this.length--
                }
                
                //添加尾项
                for(let l = 2;l<arguments.length;l++){
                    this[Number(index)+l-2] = arguments[l]
                    console.log(Number(index)+length+l-2)
                }
            }
        }
    }else{
        throw new Error("必传且数字")
    }
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,2,"oh","baby");
console.log(fruits)
