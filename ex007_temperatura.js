/*
    ex007_temperatura:
    Você chegou no EUA olhou para o termômetro e viu 100 graus fahrenheit, mas você
    quer saber quanto é esta temperatura em graus celsius. Construa um sistema que solucione
    este problema.
*/

var input = require('readline-sync')
console.log('TEMPERATURA EM CELCIUS')
const temperaturaEmFahrenheit = Number(input.question("Digite o valor em Fahrenheit: "))
console.clear()
console.log("TEMPERATURA EM CELCIUS")
console.log(`Sua temperatura é ${((temperaturaEmFahrenheit - 32 )/ 1.8).toFixed(2)} ℃ `)
