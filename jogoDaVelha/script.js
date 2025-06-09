const cells = document.querySelectorAll(".cell")

const posicoesPossiveis = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let posicoes = ["", "", "", "", "", "", "", "", ""]
let jogador = "X"

iniciaJogo()

function iniciaJogo() {
    cells.forEach(cell => cell.addEventListener("click", posicaoClicada))
}

function posicaoClicada() {
    const index = this.getAttribute("cellIndex")
    if (posicoes[index] != "" || jogador != "X") return
    atualizaCelula(this, index)
    checaVitoria()
}

function atualizaCelula(cell, index) {
    posicoes[index] = jogador
    cell.textContent = jogador
}

function mudaJogador() {
    jogador = (jogador === "X") ? "O" : "X"
    if (jogador === "O") maquinaJoga()
}

function maquinaJoga() {
    let index
    for (let i = 0; i < posicoes.length; i++) {
        if (posicoes[i] === "") {
            index = i
            break
        }
    }
    atualizaCelula(cells[index], index)
    checaVitoria()
}

function checaVitoria() {
    let ganhou = false
    for (let i = 0; i < posicoesPossiveis.length; i++) {
        let condicao = posicoesPossiveis[i]
        let a = posicoes[condicao[0]]
        let b = posicoes[condicao[1]]
        let c = posicoes[condicao[2]]
        if (a === "" || b === "" || c === "") continue;
        if (a === b && b === c) {
            ganhou = true
            break;
        }
    }

    if (ganhou) {
        alert(`${jogador} venceu!`)
        ganhou = false
        location.reload()
    }
    else if (!posicoes.includes("")) {
        alert(`Empate!`)
        location.reload()
    }
    else {
        mudaJogador()
    }
}