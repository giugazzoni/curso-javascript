let val = [2, 8, 4, 7, 1]

// mostrar cada elemento do vetor em uma linha utilizando estrutura de repetição
for(let pos = 0; pos < val.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}

console.log('---------------------------')

// pode-se fazer a mesma coisa da seguinte forma:
for(let pos in val) {
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}