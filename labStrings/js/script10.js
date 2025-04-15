const botao = document.querySelector("#executa")
const getValue = seletorDom => document.querySelector(seletorDom).value

const contaSemanas = (data1, data2) => {
    let semanasContadas
    if (data1 > data2) semanasContadas = (data1 - data2) / (1000 * 60 * 60 * 24 * 7)
    else if (data1 < data2) semanasContadas = (data2 - data1) / (1000 * 60 * 60 * 24 * 7)
    semanasContadas = Math.floor(semanasContadas)
    return semanasContadas
}

const questao10 = () => {
    let data1 = new Date(getValue("#dat1").split("-"))
    let data2 = new Date(getValue("#dat2").split("-"))
    let obj = document.querySelector("#resultado")
    let diferencaSemanas = contaSemanas(data1, data2)

    obj.innerHTML = `Diferença de semanas: ${diferencaSemanas}`
}

botao.addEventListener("click", questao10)