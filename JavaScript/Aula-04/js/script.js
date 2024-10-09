var btn = document.getElementById("btn")
var div = document.getElementById("div")
var body = document.getElementById("body")
btn.innerHTML = "Abrir Texto"

function Texto() {
    btn.addEventListener("click", function() {
        body.appendChild(btn)
        div.innerHTML = "<p>Lorem Ipsum</p>"
        btn.innerHTML = "Fechar Texto"
        Remover()
        function Remover() {
            btn.addEventListener("click", function (){
                body.appendChild(btn)
                div.innerHTML = " "
                btn.innerHTML = "Abrir Texto"
                Texto()
            })
        }
    })
}

Texto()