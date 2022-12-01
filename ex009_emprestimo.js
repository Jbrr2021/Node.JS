/*
    Ex009_emprestimo:
    Você ficou sem dinheiro e teve que pegar um empréstimo. Você vai pagar um valor de 20%
    a mais do que tomou emprestado e vai poder dividir em quantas parcelas quiser. Construa
    um sistema que mostre de quanto será o valor de cada parcela.
*/

var input = require('readline-sync')
console.log('=====================')
console.log('EMPRÉSTIMO')
console.log('=====================')
const emprestimo = Number(input.question('Informo o valor pego no emprestimo: '))
const parcelas = Number(input.question('Informe em quantas parcelas pretende pagar: '))
console.clear()
console.log('=====================')
console.log('EMPRÉSTIMO')
console.log('=====================')
console.log(
    `Voce pagará ${parcelas} parcelas de R$${(
        (emprestimo + (emprestimo * 0.2)) / 
        parcelas
        ).toFixed(2)}`)