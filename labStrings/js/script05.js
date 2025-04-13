const botao = document.querySelector("#executa")
const getValue = seletorDom => document.querySelector(seletorDom).value

const substitui = () => {
    let fraseOriginal = getValue("#frase")
    let procurar = getValue("#procura")
    let substituir = getValue("#substitui")
    let obj = document.querySelector("#resultado")

    let fraseAlterada = fraseOriginal.replaceAll(procurar, substituir)
    obj.innerHTML = fraseAlterada
}

botao.addEventListener("click", substitui)