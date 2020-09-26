Function.prototype.apply = function () {
    console.log("执行");
    let context = arguments[0];
    let args = arguments[1]

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
person.apply(obj, ["yjj"])
console.log(obj);