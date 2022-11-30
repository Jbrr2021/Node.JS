/*
    ex008_imposto:
    Você comprou muita muamba e quer saber quanto vai pagar de imposto. Construa um sistema
    que resolva este problema.

*/

var input = require('readline-sync')
console.log('IMPOSTO')
console.log('=====================')
const valorDoProduto = Number(input.question('Quanto foi o valor do produto? R$ '))
console.clear()
console.log('IMPOSTO')
console.log('=====================')
console.log(`Vou pagar de imposto R$${(valorDoProduto * 0.4).toFixed(2)}`)