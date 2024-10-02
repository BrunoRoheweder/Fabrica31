const lista1 = [1,2,3,4,5]
const lista2 = [5,6,7,8,9]

var juntar = lista1.concat(lista2)
var remover = 5
juntar.splice(remover, 1)
console.log(juntar)