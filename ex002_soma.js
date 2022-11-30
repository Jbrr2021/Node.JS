/*
    ex002_soma:
    Desenvolva um programa que solicite ao usuário digitar números e no final apresente o
    resultado da soma entre os dois números.
*/

var readlineSync = require('readline-sync')
var numero1 = Number(readlineSync.question('Digite um numero: '))
var numero2 = Number(readlineSync.question('Digite outro numero: '))
console.log(`A soma é entre ${numero1} e ${numero2} é igual a ${numero1 + numero2} `)