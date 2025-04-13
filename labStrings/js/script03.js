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

const criarTabela = palavrasLista => {
    let tabela = "<table><tr><th>Palavra</th><th>Ocorrências</th></tr>"
    for(let i = 0; i < palavrasLista.length; ++i) {
        tabela += "<tr><td>" + palavrasLista[i].palavra + "</td><td>" + palavrasLista[i].ocorrencias + "</td></tr>"
    }
    tabela += "</table>"
    return tabela
}

const questao3 = () => {
    let texto = getValue("#frase").toLowerCase()
    let tabela = document.querySelector("#resultado")
    let palavrasArray = texto.split(" ")
    let palavrasContadas = contarPalavras(palavrasArray)
    tabela.innerHTML = criarTabela(palavrasContadas)
}

botao.addEventListener("click", questao3)