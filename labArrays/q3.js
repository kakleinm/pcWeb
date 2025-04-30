const decimalParaRomano = num => {
    const numRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const numDecimais = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let resultado = ""
    for (let i = 0; i < numDecimais.length; i++) {
        while (num >= numDecimais[i]) {
            resultado += numRomanos[i]
            num -= numDecimais[i]
        }
    }
    return resultado
}

console.log(decimalParaRomano(27))
