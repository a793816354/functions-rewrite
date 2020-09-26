// fn.call(context,...args)

Function.prototype.call = function () {
    console.log("执行");
    let context = arguments[0];
    let args = [...arguments].slice(1);

    let fn = this.name;
    context[fn] = this;
    context[fn](...args)
    delete context[fn]
}

let obj = {
    name: ""
}

let person = function (name, age = 22) {
    this.name = name;
    this.age = age;
}
person.call(obj, "yjj")
console.log(obj);

//核心思想:把目标函数this存为目标对象的一个属性，使用目标对象去执行，后删除