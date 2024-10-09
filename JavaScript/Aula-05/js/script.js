var btn = document.getElementById("btn")
var div = document.getElementById("div")
var body = document.getElementById("body")
btn.innerHTML = "Clique aqui"

function Cliques() {
    var cont = 0
    btn.addEventListener("click", function() {
        body.appendChild(btn)
        div.innerHTML = `<p>Cliques: ${cont++}</p>`
        btn.innerHTML = "Clique aqui"
    })
}

Cliques()