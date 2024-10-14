function Soma(lista){
    var soma = 0
    lista.forEach(function(valor){
        if (valor % 2 === 0){
            soma += valor
        }
    });
    return soma
}
var array = [1,2,3,4,5,6]
var resultado = Soma(array)
console.log(resultado)