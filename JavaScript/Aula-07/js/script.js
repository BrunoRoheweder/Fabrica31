var btn = document.getElementById("btn")
var item = document.getElementById("item")
var lista = document.getElementById("lista")
var cont = 1

btn.addEventListener("click", function() {
    var inputTrue = item.value
    // Verifica se tem alguma coisa no input
    if (inputTrue) {
        // adiciona o elemento na tela
        var textLista = document.createElement("li")
        var remove = document.createElement("button")
        // Adiciona o texto no elemento
        textLista.textContent = `${inputTrue} ${cont++}`
        remove.innerText = "Remover"
        textLista.appendChild(remove)
        lista.appendChild(textLista)
        // remove um elemento criado na tela, com a funcionalidade do botão
        remove.addEventListener("click", function(){
            lista.removeChild(textLista)
        })

    } else {
        alert("Adicionar um item para cadastrar")
    }
});
