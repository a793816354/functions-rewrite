// fn.bind(obj,...args)
Function.prototype.bind = function () {
    let _this = this;
    let context = arguments[0]
    let args = [...arguments].slice(1)
    return function () {
        _this.apply(context, args)
    }
}

let obj = {
    name:""
}

let person = function(name,age=22){
    this.name = name;
    this.age = age;
}
let fn = person.bind(obj,"yjj",24);
fn()
console.log("obj",obj);