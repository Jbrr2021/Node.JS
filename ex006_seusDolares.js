/*
    Você vai viajar para os Estados Unidos e quer saber quanto vai levar em dólares. Construa
    um sistema que resolva este problema.
*/

var input = require('readline-sync')
console.log('SEUS DÓlARES')
const valorEmReal = Number(input.question("Digite o valor em reais R$ "))
console.clear()
console.log('SEUS DÓLARES')
console.log(`Você tem ${(valorEmReal / 5.31).toFixed(2)}`)