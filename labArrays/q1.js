const sum = arrayNum => {
  let arraySomado = 0
  for (let i = 0; i < arrayNum.length; i++) {
    arraySomado += arrayNum[i]
  }
  return arraySomado
}

const sumOdds = arrayNum => {
  let soma = 0
  soma = arrayNum.reduce(function (soma, num) {
    if (num % 2 != 0) {
      return soma + num
    }
    else {
      return soma
    }
  }, 0)
  return soma
}

const product = arrayNum => {
  let produto = 1
  produto = arrayNum.reduce(function (produto, num) {
    return produto * num
  }, 1)
  return produto
}

let array = [1, 2, 3, 4, 5]

console.log(sum(array))
console.log(sumOdds(array))
console.log(product(array))