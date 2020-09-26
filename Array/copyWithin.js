// 从数组的指定位置拷贝元素到数组的另一个指定位置中。
Array.prototype.copyWithin = function(target, start=0, end=this.length) {
    if(target&&!isNaN(Number(target))){
        if(!isNaN(start)&&!isNaN(end)&&end>=start){
            let arr = []
            for(let i=start;i<end;i++){
                arr.push(this[i])
            }

            for(let i=0;i<arr.length;i++){
                this[Number(target)+i] = arr[i]
            }
        }else{
            throw new Error("为数字")
        }
    }else{
        throw new Error("第一个参数必传且为数字")
    }
}

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];//[ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya' ]
fruits.copyWithin("2", 0, 4);
console.log(fruits)