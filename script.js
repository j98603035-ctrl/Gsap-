function breaktext() {
    var h1 = document.querySelector("h1")
    var h1text = h1.textContent
    var splittedtext = h1text.split("")

    var clutter = ""

    splittedtext.forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })

    h1.innerHTML = clutter
}

breaktext()