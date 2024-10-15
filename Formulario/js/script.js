// puxando/pegando as informações do input

const form = document.getElementById("form")
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const senha2 = document.getElementById("senha2")

// esta submentento e o event não "recarrega" a pagina
form.addEventListener("submit", function(event){
    event.preventDefault()
})
