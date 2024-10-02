var dataNascimento = new Date('2000-01-01')
var dataHoje = new Date()
var idadeEmAnos = dataHoje.getFullYear() - dataNascimento.getFullYear()
console.log(`Idade do usuario: ${idadeEmAnos} anos`)