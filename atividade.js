let num
let numeros = []
let outroNum
let contador = 0

for (let i = 0; i < 10; i++) {
    do {
        num = parseFloat(prompt(`Digite o ${i +1}º número`))

        if (isNaN(num) || num < 0)
            alert("Número Inválido")

    } while (isNaN(num) || num < 0)
    numeros[i] = num
}

do {

    outroNum = parseFloat(prompt("Digite um número que você deseja saber quantas vezes aparece na sequência"))

    if (isNaN(outroNum) || outroNum < 0) {
        alert("Número inválido!");
    }
} while (isNaN(outroNum) || outroNum < 0);

for (let j = 0; j < 10; j++) {
    if (numeros[j] === outroNum) {
        contador++;
    }
}
alert(`O número digitado aparece ${contador} vezes`)