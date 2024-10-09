var btn = document.getElementById("btn")
var div = document.getElementById("div")
var body = document.getElementById("body")
var nome = document.getElementById("email")
var senha = document.getElementById("senha")

function Cadastro() {
    btn.addEventListener("click", function() {
        var nomeValue = nome.value;
        var senhaValue = senha.value;

        if (nomeValue === "admin" && senhaValue === "admin") {
            div.innerHTML = "<p>Bem vindo admin</p>";
        } else {
            div.innerHTML = "<p>Acesso negado</p>";
        }
    });
}

Cadastro()