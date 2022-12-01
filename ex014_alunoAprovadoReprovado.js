/*
    ex014_alunoAprovadoReprovado:
    Desenvolva um programa em que o usuário digite duas notas e o mostre a média das notas
    e se o aluno está aprovado ou reprovado. Considerando aprovado o aluno com media maior
    igual a sete.
*/

var input = require('readline-sync')
console.log('=================================')
console.log('  ex014_alunoAprovadoReprovado   ')
console.log('=================================')
const notaA = Number(input.question('Digite sua nota do 1 perido: '))
const notaB = Number(input.question('Digite sua nota do 2 perido: '))
let notaFinal = ``

const media = ((notaA + notaB) / 2)
if (media >= 7) {
    notaFinal = `Aluno Aprovado`
} else {
    notaFinal = `Aluno Reprovado`
}
console.clear()
console.log('=================================')
console.log('  ex014_alunoAprovadoReprovado   ')
console.log('=================================')
console.log(`A média do aluno foi: ${media} `)
console.log(notaFinal)
console.log('=================================')