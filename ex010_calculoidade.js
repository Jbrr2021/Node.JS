/*
    ex010_calculeIdade:
    Desenvolva um programa em que o usuário digite o ano de nascimento e o programa mostre
    a idade do usuário e uma mensagem informado se ele já atingiu a maioridade.
*/

var input = require('readline-sync')
console.log('=====================')
console.log('ex010_calculoIdade')
console.log('=====================')
var agora = new Date()
var anoAtual = agora.getFullYear()
var anoDeNascimento = Number(input.question('Digite seu ano de Nascimento: '))
var idade = anoAtual - anoDeNascimento
var resultadoFinal = ``
console.clear()
console.log('=====================')
console.log('ex010_calculoIdade')
console.log('=====================')
resultadoFinal = `Sua idade é ${idade} anos você ainda e menor de idade!`
if(idade >= 18){
    resultadoFinal += `é você atigiu a maioridade!`
}
console.log(resultadoFinal)