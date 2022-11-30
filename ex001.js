/* 
    ex001_mensagem:
    Desenvolva um programa que pergunte qual é o nome do usuário e no
    final mostre uma mensagem com o nome do usuário foi digitado.

*/


var readlineSync = require('readline-sync')
var nome = readlineSync.question('Qual e seu nome? ')
console.log(`Olá! Seja bem-vindo ${nome}!`)