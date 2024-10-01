function Soma(lista){
    lista.forEach(function(valor, index){
        var par = valor % 2 === 0
        if (par){
            var soma = valor + valor
            console.log(soma)
        }
    });
}
var array = [1,2,3,4,5,6]
var resultado = Soma(array)
console.log(resultado)