/*
    ex012_calculoImc:

    Elabore um programa em que o usuário digite o seu peso (Kg) e altura (metro) e o 
    programa informe o IMC do usuário e se ele está dentro do peso ideal ou fora do peso ideal.

    Dica: faixa de peso ideal entre 18.5 e 25.
*/

var input = require('readline-sync')
console.log('=====================')
console.log('  ex012_calculoImc   ')
console.log('=====================')
const peso = Number(input.question("Digite seu peso atual (Kg): "))
const altura = Number(input.question("Digite a sua altura atual (m): "))
console.clear()
console.log('=====================')
console.log('  ex012_calculoImc   ')
console.log('=====================')
const IMC = (peso / (altura * altura)).toFixed(2)
console.log(`Seu IMC é iagual a ${IMC}`)
if (IMC >= 18.5 && IMC <= 25) {
    console.log(`Seu peso está ideal!`)
} else {
    console.log(`Seu peso está fora do ideal!`)
}
console.log('=====================')
