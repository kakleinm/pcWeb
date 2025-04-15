const botao = document.querySelector("#executa")

const contaDias = (data1, data2) => {
    let diasContados = (data1 - data2) / (1000 * 60 * 60 * 24)
    diasContados = Math.floor(diasContados)
    return diasContados
}

const questao9 = () => {
    let data = document.querySelector("#data").value 
    let dataArray = data.split('-')
    let obj = document.querySelector("#resultado")

    let dataAtual = new Date()
    let dataAniversario = new Date(dataArray[0], dataArray[1] - 1, dataArray[2])

    let diferencaDias = contaDias(dataAtual, dataAniversario)
    obj.innerHTML = `Total de dias vividos: ${diferencaDias}`
}

botao.addEventListener("click", questao9)