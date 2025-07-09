const criaDOM = elemento => document.createElement(elemento)
const secao = document.querySelector("#filmes")

function criaLista (array) {
    const ul = criaDOM("ul")
    array.forEach(function(item) {
        const li = criaDOM("li")
        li.appendChild(document.createTextNode(item))
        ul.appendChild(li)
    })
    return ul
}

function titulosSemelhantes (filme) {
    let array = []
    filme.titulosSemelhantes.forEach(function (elemento) {
        filmes.forEach(function(item) {
            if (item.id == elemento) {
                array.push(item.titulo)
            }
        })
    })
    return array
}

function estrelinhas (fopinioes) {
    let rate = ""
    let i = 0
    while (i < fopinioes.rating) {
        rate += "★"
        i++
    }
    return rate
}

function exibeFilme (filme) {
    const div = criaDOM("div")
    const header = criaDOM("h1")
    const img = criaDOM("img")
    const faixa = criaDOM("p")
    const desc = criaDOM("p")

    faixa.appendChild(document.createTextNode("Classificação indicativa: " + filme.classificacao))
    desc.appendChild(document.createTextNode(filme.resumo))
    img.src = filme.figura
    header.appendChild(document.createTextNode(filme.titulo))
    faixa.className = "c"

    switch(filme.classificacao) {
        case 18: faixa.style.backgroundColor = "black"; break;
        case 16: faixa.style.backgroundColor = "red"; break;
        case 12: faixa.style.backgroundColor = "yellow"; faixa.style.color = "black"; break;
        case 10: faixa.style.backgroundColor = "#425dd4"; break;
        default: faixa.style.backgroundColor = "green"; faixa.textContent = "Classificação indicativa: Livre";
    }

    let arrayElenco = filme.elenco
    let arrayGeneros = filme.generos
    arrayElenco.unshift("Elenco")
    arrayGeneros.unshift("Gêneros")

    const elenco = criaLista(filme.elenco)
    const genero = criaLista(filme.generos)

    let opinioes = []
    let titulos = titulosSemelhantes(filme)
    titulos.unshift("Títulos Semelhantes")

    filme.opinioes.forEach(function(item) {
        let rate = estrelinhas(item)
        let texto = `${rate}; \n ${item.descricao}`
        opinioes.push(texto)
    })

    opinioes.unshift("Avaliações")

    const opiniao = criaLista(opinioes)
    const titulo = criaLista(titulos)

    div.append(img, header, faixa, desc, titulo, elenco, genero, opiniao)
    secao.append(div)
}

filmes.forEach(exibeFilme)