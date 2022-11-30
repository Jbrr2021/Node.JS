/*
    ex004_TesteDosTriangulos:
    Desenvolva um programa que solicite ao usuário digitar o valor de três lados de uma forma
    geométrica. O programa deverá informa um triângulo, se esse triângulo é equilátero ou escaleno.
    ===============================================================================================
    Dica: Só irá existir um triângulo se, somente se, os seus lados obedecerem á seguinte regra:
    um de seus lados deve ser maior que o valor absoluto da diferença dos outros dois lados e menor
    que a soma dos outros dois lados. Para se equilátero, todos os lados devem ser iguais. E para ser
    escaleno todos os lados devem ser diferentes um do outro.
*/

var readlineSync = require('readline-sync')
console.log('=======================')
console.log('TESTE DOS TRIÂNGULOS')
console.log('=======================')
var ladoA = Number(readlineSync.question('Digite o 1º lado: '))
var ladoB = Number(readlineSync.question('Digite o 2º lado: '))
var ladoC = Number(readlineSync.question('Digite o 3º lado: '))
console.clear()
var triangulo = Math.abs(ladoB - ladoC) < ladoA && ladoA < ladoB + ladoC && Math.abs(ladoC - ladoA) < ladoB && ladoB < ladoC + ladoA && Math.abs(ladoA - ladoB) < ladoC && ladoC < ladoA + ladoB
var equilatero = ladoA == ladoB && ladoB == ladoC && ladoC == ladoA
var escaleno = ladoA != ladoB && ladoB != ladoC && ladoC != ladoA
console.log('=======================')
console.log('TESTE DOS TRIÂNGULOS')
console.log('=======================')
console.log(`Valores Digitados: ${ladoA}, ${ladoB} é ${ladoC}`)
console.log(`Triangulo: ${triangulo} `)
console.log(`Equilatero : ${equilatero}`)
console.log(`Escaleno: ${escaleno}`)
console.log('=======================')