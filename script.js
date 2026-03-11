var h1 = document.querySelector("h1").textContent

var splittedtext = h1.split("")

var clutter = ""

splittedtext.forEach(function () {
    clutter=clutter+"hey"

})

console.log(clutter)