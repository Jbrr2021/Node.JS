/*
    Você está fazendo anivesário, mas não sabe quantas velas colocar no bolo.
    Sabe apenas o ano do seu nascimento. Contrua um programa que solucione esta
    problema.
*/

var input = require('readline-sync')
console.log('SUA IDADE')
const agora = new Date()
const anoAtual = agora.getFullYear()
const anoDeNascimento = Number(input.question('Digite o ano do seu nascimento[yyyy]: ')
)
if (anoDeNascimento > anoAtual) {
    console.log("[ERRO] Ano de nascimento inválido!") 
} else {
    console.log(`Sua idade é ${anoAtual - anoDeNascimento} anos!`)  
}