const botao = document.querySelector("#executa")
const getValue = seletorDom => document.querySelector(seletorDom).value

const palavraContada = (palavra, lista) => {
    let foiContada = false
    for (let i = 0; i < lista.length; i++) {
        if(palavra == lista[i].palavra) foiContada = true
    }
    return foiContada
}

const contarPalavras = palavrasLista => {
    let palavrasContadas = []
    let ocorrencias = 0
    for (let i = 0; i < palavrasLista.length; i++) {
        if(!palavraContada(palavrasLista[i], palavrasContadas)) {
            ocorrencias++
            for (let j = 0; j < palavrasLista.length; j++) {
                
                if (palavrasLista[i] === palavrasLista[j] && i != j) {
                    ocorrencias++
                }
            }
            palavrasContadas.push({palavra: palavrasLista[i], ocorrencias: ocorrencias})
            ocorrencias = 0
        }
    }
    return palavrasContadas
}

const maiorOcorrencia = palavrasContadas => {
    let maior = palavrasContadas[0]
    for (let i = 0; i < palavrasContadas.length; i++) {
        if (maior.ocorrencias <= palavrasContadas[i].ocorrencias) {
            maior = palavrasContadas[i]
        }
    }
    return maior;
}

const conta = texto => {
    let letras = 0

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] >= 'a' && texto[i] <= 'z' || texto[i] >= 'A' && texto[i] <= 'Z') {
            letras++
        }
    }

    return letras
}

const questao4 = () => {
    let texto = getValue("#frase").toLowerCase()
    let resultado = document.querySelector("#resultado")
    let palavras = texto.split(" ")
    let numPalavras = palavras.length
    let numLetras = conta(texto)
    let palavrasContadas = contarPalavras(palavras)
    let palavraMaisOcorrencia = maiorOcorrencia(palavrasContadas)
    resultado.innerHTML = "<b>" + palavraMaisOcorrencia.palavra + "</b> é a palavra com mais ocorrências, com " + palavraMaisOcorrencia.ocorrencias + " aparições. <br> Esse texto possui " + numPalavras + " palavras e " + numLetras + " letras."
}

botao.addEventListener("click", questao4)