/*
    ex011_parOuImpar:
    
    Contrua um sistema que o usuário digite um valor e o programa informe se aquele valor
    é par ou ímpar.

*/

var input = require('readline-sync')
console.log('=====================')
console.log('  ex011_parOuImpar   ')
console.log('=====================')
const numero = Number(input.question("Digite um numero: "))
if (numero % 2 == 0 ) {
    console.log(`${numero} é PAR!`)
} else {
    console.log(`${numero} é IMPAR!`)
}
console.log('=====================')