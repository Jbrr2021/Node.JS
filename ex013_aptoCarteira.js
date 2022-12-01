/*
    ex013_aptoCarteira:

    Crie um sistema em que o usuário digite o seu ano de nascimento e o programa informe
    se o usuário está apto ou inapto a tirar a carteira de trânsito. Considerando apto
    o usuário maior de idade.
*/

var input = require('readline-sync')
console.log('=====================')
console.log('  ex012_aptoCarteira ')
console.log('=====================')
const agora = new Date()
const anoAtual = agora.getFullYear()
const anoDeNascimento = Number(input.question(`Digite seu ano de nascimento: `))
const idade = anoAtual - anoDeNascimento
console.clear()
console.log('=====================')
console.log('  ex013_aptoCarteira ')
console.log('=====================')
console.log(`Sua idade é ${idade} anos! `)
if(idade >= 18) {
    console.log('Apto a tirar sua Habilitação!')
} else {
    console.log('Inapto a retirar sua Habilitação!')
}
console.log('=====================')
