var btn = document.getElementById("btn")
var div = document.getElementById("div")
var body = document.getElementById("body")
btn.innerHTML = "Abrir Texto"

function Texto() {
    // btn.addEventListener("click", function() {
        body.appendChild(btn)
        div.innerHTML = "<p>Lorem Ipsum</p>"
        btn.innerHTML = "Fechar Texto"
        setTimeout(Remover, 7000)
        function Remover() {
            // btn.addEventListener("click", function (){
                body.appendChild(btn)
                div.innerHTML = " "
                btn.innerHTML = "Abrir Texto"
                Texto()
            // })
        }
    // })
}

for (var i = 0; i < 10; i++){
    setTimeout(() => Texto(i), i * 8000);
}

Texto()
























// var btn = document.getElementById("btn")
// var body = document.getElementById("body")
// btn.innerHTML = "Color"

// function Color() {
//     btn.addEventListener("click", function() {
//         Black()
//         function Black() {
//             body.innerHTML = "<style>#body {background-color: black;}</style>"
//             body.appendChild(btn)
//             btn.innerHTML = "White"
//             White()
//             function White() {
//                 btn.addEventListener("click", function() {
//                     body.innerHTML = "<style>#body {background-color: white;}</style>"
//                     body.appendChild(btn)
//                     btn.innerHTML = "Black"
//                     Color()
//                 })
//             }
//         }
//     })
// }

// Color()




