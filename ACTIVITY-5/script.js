
const var1 = document.getElementById("b1")
console.log(var1)
const output = document.getElementById("output")

const var2 = document.getElementById("b2")
console.log(var2)

const var3 = document.getElementById("b3")
console.log(var3)

const var4 = document.getElementById("input")
console.log(var4)

const var5 = document.getElementById("studentname")
console.log(var5)

const var6 = document.getElementById("img")
console.log(var6)

var1.addEventListener(
    "click", function () {
        output.innerHTML = "Click event activated"
        output.style.color = "red"
       
    }
)

var2.addEventListener(
    "dblclick", function () {
        output.innerHTML = "Double click event activated"
        output.style.color = "blue"
    }
)

var3.addEventListener(
    "mousedown", function () {
        output.innerHTML = "Mouse button is pressed"
        output.style.color = "brown"
    }
)

var3.addEventListener(
    "mouseup", function () {
        output.innerHTML = "Mouse button was released"
    }
)

var4.addEventListener (
    "input", function () {
        var5.innerHTML = "Hi, " + var4.value + "!"
    }
)
 
var6.addEventListener (
    "mouseover", function () {
        output.innerHTML = "Mouse entered the image"
        output.style.color = "deeppink"
    }
)

var6.addEventListener (
    "mouseout", function () {
        output.innerHTML = "Mouse left the image"
        output.style.color = "orange"
    }
)