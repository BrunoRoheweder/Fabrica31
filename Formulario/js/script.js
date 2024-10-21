const form = document.getElementById("form")
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const senha2 = document.getElementById("senha2")


function ShowError(input, mensagem){
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerHTML = mensagem
}
function ShowSucesso(input){
    const formControl = input.parentElement
    formControl.className = "form-control sucesso"
}

function checkRequired(listaInput){

    let valido = true
    listaInput.forEach(function (input) {
        if(input.value == ""){
            ShowError(input,"Campo obrigatorio")
            valido = false
        }else{
            ShowSucesso(input)
        }
    })
    return valido

}

function CheckSize(input,max,min){
    let valido = true
    if(input.value.length < min){
        ShowError(input,`Tem que ter no minimo ${min}`)
        valido = false
    }else if(input.value.length > max){
        ShowError(input, `Maior que ${max}`)
        valido = false
    }
    return valido
} 

function CheckPassword(senha,senha2){
    if(senha.value !== senha2.value){
        ShowError(senha2,"As senhas não são iguais")
        return false
    }
    return true
}


form.addEventListener("submit",function(event) {
    event.preventDefault()
    let isValid = checkRequired([usuario,email,senha,senha2])

    isValid = CheckSize(usuario,15,3) && isValid
    isValid = CheckSize(senha,15,3) && isValid
    isValid = CheckPassword(senha,senha2) && isValid

    if(isValid){
        const dados = {
            usuarioNome: usuario.value,
            usuarioEmail: email.value,
            usuarioSenha: senha.value
        }
       console.log(dados)

       window.location.href = "./home.html"
    }
})


