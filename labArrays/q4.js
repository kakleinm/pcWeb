const atm = valor => {
    notas = [100, 50, 20, 10, 5, 2]
    notasCount = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < notas.length; i++) {
        while (valor >= notas[i]) {
            notasCount[i]++
            valor -= notas[i]
        }
    }
    return notasCount
}

notasContadas = atm(1280)

console.log("100: " + notasContadas[0])
console.log("50: " + notasContadas[1])
console.log("20: " + notasContadas[2])
console.log("10: " + notasContadas[3])
console.log("5: " + notasContadas[4])
console.log("2: " + notasContadas[5])