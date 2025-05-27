let numeros = []
let num
let soma = 0


for (let i = 0; i < 10; i++) {
    do {
        num = parseInt(prompt(`Digite o ${i+1} número`))


        if (isNaN(num) || num < 0)
            alert("Número Inválido")


    } while (isNaN(num) || num < 0)
    numeros[i] = num
}
for (let j = 0; j < 10; j++) {
    if (numeros[j] % 2 === 0)
        soma += numeros[j]
}
alert(`A soma dos números pares é ${soma}`)