let num = [5, 8, 4]
num[3] = 6 // coloca o valor 6 na posição 3 do vetor num[]
num.push(7) // adiciona o valor 7 na ultima posição do vetor num[]
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostra o valor que se encontra na posição 0
console.log(`O vetor tem ${num.length} posições`) // exibe o tamanho do vetor
console.log(`O vetor em ordem crescente fica ${num.sort()}`) // coloca os elementos do vetor em ordem numérica crescente

// mostrando a posição de determinado elemento
n = 8
pos = num.indexOf(n)
if(pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor ${n} encontra-se na posição ${pos}`)
}
