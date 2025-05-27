let num
let numeros = []
let duplicata = []

for (let i = 0; i < 10; i++) {

    do {
        num = parseFloat(prompt(`Digite o ${i + 1}º número`))

        if (isNaN(num) || num < 0)
            alert("Número Inválido")

    } while (isNaN(num) || num < 0)
    numeros[i] = num
}

for (let j = 0; j < 10; j++) {

    for(let k = 0; k<10; k++){

        if (numeros[j] == numeros[k] && numeros[j]!=numeros[k]){
            duplicata[j] === numeros[j]
        }
    } 
}
alert(numeros)
alert(duplicata)