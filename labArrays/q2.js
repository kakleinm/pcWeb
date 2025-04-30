const verificaPrimo = num => {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
}

const arrayPrimos = (a, b) => {
    let listaPrimos = []
    if (b === undefined) {
        for (let i = 0; listaPrimos.length < a; i++) {
            if (verificaPrimo(i)) {
                listaPrimos.push(i)
            }
        }
    }
    else {
        if (a < b) {
          for (let i = a; i <= b; i++) {
              if (verificaPrimo(i)) {
                  listaPrimos.push(i)
              }
          }
        }
    }
    return listaPrimos
}

console.log(arrayPrimos(4))
console.log(arrayPrimos(2, 10))