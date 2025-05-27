let media = 0
let num
let soma = 0
let numeros = []
let acimaMedia = []

for (let i = 0; i < 8; i++) {

    do {
        num = parseFloat(prompt(`Digite o ${i+1} número`))

        if (isNaN(num) || num < 0)
            alert("Número Inválido")

    } while (isNaN(num) || num < 0)

    soma += num
    numeros[i] = num
}

media = soma / 8

for (let j = 0; j < 8; j++) {
    if (numeros[j] > media) {
        acimaMedia[j] = numeros[j]
    }
}

alert(`A media dos números é ${media}`)

alert(`Os números acima da média são ${acimaMedia}`)