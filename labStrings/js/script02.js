const botao = document.querySelector("#executa")

const acharVogais = (texto, tamTexto) => {
    let textoTrocado = ""
    for (let i = 0; i < tamTexto; i++) {
        if (texto[i] == 'a') textoTrocado += '@'
        else if (texto[i] == 'e') textoTrocado += '3'
        else if (texto[i] == 'i') textoTrocado += '1'
        else if (texto[i] == 'o') textoTrocado += '0'
        else if (texto[i] == 'u') textoTrocado += '#'
        else textoTrocado += texto[i]
    }
    return textoTrocado
}

botao.onclick = function() {
    let texto = document.querySelector("#frase").value.toLowerCase()
    let tamTexto = texto.length
    texto = acharVogais(texto, tamTexto)
    let div = document.querySelector("#resultado1")
    div.innerHTML += texto
}