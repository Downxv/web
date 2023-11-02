let echo = "hello word 'javascript'" + 8.1 + (2 == 1)
console.log(echo)
// undefined<未赋值或赋了一个不存在的值> NaN<没有意义的数字> null<定义空的或不存在的引用>
let a = null
let b
console.log(a)
console.log(2 / "a")
console.log(b)
let c = 120
console.log(c++)
console.log(++c)
console.log("1" == 1)
console.log("1" === 1)
console.log("1" != 1)
console.log("1" !== 1)
console.log(c += 1)
console.log(1 === 1 && 2 === 2) // ! ||
console.log(c === 123 ? "是" : "否")
// 位运算符 略
console.log(typeof c)
let arr = new Array(1, 2, 3)
console.log(arr)
if (1 > 2) {
    if (2 > 1) {

    }
    else {

    }
}
else if (3 > 2) {

} else {

}
switch (c) {
    case 120:
        console.log(120)
        break
    case 121:
        console.log(121)
        break
    case 122:
        console.log(122)
        break
    case 123:
        console.log(123)
        break
    default:
        console.log("default")
        break
}
while (c > 123) {
    continue
}
do {
    console.log(c)
} while (c > 123)
for (var i = 1; i < 3; i++) {
    console.log(i)
}
function su(a, b) {
    let c = a + b
    return c
}
// 页面调用
// <button onclick="su(1,2);"></buttom>
// <a href="javascript:su(1,2);">su</a>
console.log(su(3, 8))
//内置函数
// eval()
// isFinite()
// isNaN()
// parseInt()
// parseFloat()
// encodeURI()
// decodeURI()
console.log(encodeURI("www.baidu.com/?search=搜索"))
function maskKeyboard() {
    if ((event.keyCode == 0)) {
        alert("已禁用Backspace")
        return false
    }
}
function rightKey() {
    if (event.button == 2) {
        alert("禁用鼠标右键")
        return false
    }
}

let st = "asdf"
console.log(st.length)
let d = true
console.log(d + 1)
let arr1 = [1, true, "ok"]
console.log(arr1[1])
arr1.length += 2
console.log(arr1)
arr1[3] = 0
arr1[4] = 9
arr1[5] = 6
console.log(arr1)
// 函数
function fn() {
    console.log(arguments)
}
fn(1, 2, 3)
// 函数的另一种声明方式
let xx = function () { }
// js预解析 预解析var 和 function
// 对象
// 创建对象
let obj = {
    name: "a",
    age: 1,
    sex: "man",
    fn: function () {
        console.log("hi");
    }
} // 1
console.log(obj["name"] + "-" + obj.age)
obj.fn()
obj["fn"]()

let obj1 = new Object()
obj1.name = "b"
obj1["age"] = 2
obj1.fn = function () {
    console.log("hi")
} // 2

class Star {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.fn = function () {
            console.log(this.name + this.age)
        }
    }
} // 3 创建类

let fna = new Star("c", 12)
console.log(typeof fna);
fna.fn();

// 遍历对象属性
for (k in fna) {
    console.log(fna[k]);
}
// 内置对象 Math Date Array String
console.log(Math.PI)
console.log(Math.max(1, 2))
console.log(Math.round(1.23))
console.log(Math.random()); // [0, 1)

let dt = new Date()
console.log(dt)
let dt1 = new Date("2023-10-26 16:10:10")
console.log(dt1)
console.log(dt1.getDate())

console.log(dt1.valueOf()) // 时间戳
console.log(dt1.getTime())
console.log(Date.now())
console.log(+new Date())

// 数组
let ar = new Array(3) // 3个元素
let ar1 = new Array(2, 3) // 元素为2,3
console.log(ar instanceof Array);
ar1.push(4) // 末尾添加
ar1.unshift(5) // 前面添加      
console.log(ar1.pop()) // 删除末尾元素
console.log(ar1.shift()) // 删除第一个元素
ar1.reverse()
ar1.sort(function (a, b) {
    return a - b
})
console.log(ar1.indexOf(3))
console.log(ar1.lastIndexOf(2))
console.log(ar1.toString())
console.log(ar1.join("."))

// 字符串
let s = "hgfdw"
console.log(s.indexOf("f"))
console.log(s.lastIndexOf("g"))
console.log(s.charAt(2))
console.log(s[1])
console.log(s.replace("dw", "ss"))
console.log(s.split("f"))

// DOM
let t = document.getElementById("t")
console.log(t)
let div = document.getElementsByTagName("div")
console.log(div) // 数组
let tt = t.getElementsByTagName("span")
console.log(tt)
let cl = document.getElementsByClassName("test-1")
console.log(cl)
let q = document.querySelectorAll("div[id='t']")
console.log(q)
console.log(document.body)
console.log(document.documentElement)
t.onclick = function () {
    console.log("点击")
    t.innerHTML = "<h1>div</h1>" + t.innerHTML
    tt[0].innerText = "span"
    // img.src = "www"
    // a.href = "www"
    // img.title = "aaa"
    // input.type = "text"
    // input.value = "ok"
    // input.checked = true
    // input.selected = true
    // input.disabled = true
    // this.innerText = "调用"
    this.style.backgroundColor = "#cf0"
}
