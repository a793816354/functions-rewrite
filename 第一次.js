// 使用:
// let promise = new Promise(function(resolve,reject) {
//         if(true){
//             resolve(value)
//         }else{
//             reject(error)
//         }
// })

// promise.then(function(res) {

// }).catch(function(err) {

// }).finally(function(e){

// })

// 首先定义类，这里用函数式，后续会用es6 class语法

// 经测试,触发catch情况有两种:
// 1.手动调用reject
// 2.promise传入的函数参数抛出错误

let myPromise = function (fn) {
    this["[[PromiseStatus]]"];
    this["[[PromiseValue]]"];

    if (typeof fn === "function") {
        try {
            fn.call(null, arguments.callee.resolve.bind(this), arguments.callee.reject.bind(this))
        } catch (error) {
            arguments.callee.reject.call(this, error)
        }
    } else {
        throw new Error("Promise resolver undefined is not a function")
    }
}

// 测试resolve果然存在
// console.log(Promise.resolve) //ƒ resolve() { [native code] } ,证明resolve和reject函数存为
// Promise的静态方法

myPromise.resolve = function (value) {
    this["[[PromiseStatus]]"] = "resolved";
    this["[[PromiseValue]]"] = value;
}

myPromise.reject = function (err) {
    this["[[PromiseStatus]]"] = "rejected";
    this["[[PromiseValue]]"] = err;
}

// 原型上的方法
Object.defineProperties(myPromise.prototype, {
    "then": {
        value: function (fn) {
            setTimeout(() => {
                if (typeof fn === "function") {
                    if (this["[[PromiseStatus]]"] === "resolved") {
                        fn.call(null, this["[[PromiseValue]]"])
                    }
                }
            }, 0)
            //链式调用
            return this
        },
        enumerable: false
    },
    "catch": {
        value: function (fn) {
            setTimeout(() => {
                if (typeof fn === "function") {
                    if (this["[[PromiseStatus]]"] === "rejected") {
                        fn.call(null, this["[[PromiseValue]]"])
                        throw new Error("Uncaught (in promise)" + this["[[PromiseValue]]"])
                    }
                }
            }, 0)
            //链式调用
            return this
        },
        enumerable: false
    },
    "finally": {
        value: function (fn) {
            setTimeout(() => {
                if (typeof fn === "function") {
                    fn()
                }
            }, 0)
        },
        enumerable: false
    },
})

let fn = function (resolve, reject) {
    if (2 > 1) {
        resolve("666")
    } else {
        reject("错了哦")
    }

    // if (2 < 1) { 
    //     resolve("666")
    // } else {
    //     reject("错了哦")
    // }

    // throw new Error("传入函数报错了")
}

let promise = new myPromise(fn)
console.log(promise)
promise.then("怎么说")
promise.then(res => {
    console.log("执行then", res)
}).catch(err => {
    console.log("执行catch", err)
})