const botao = document.querySelector("#executa")
const getValue = seletorDom => document.querySelector(seletorDom).value

const mesExtenso = data => {
    switch (data[1]) {
        case '01' : data[1] = "janeiro"; break
        case '02' : data[1] = "fevereiro"; break
        case '03' : data[1] = "março"; break
        case '04' : data[1] = "abril"; break
        case '05' : data[1] = "maio"; break
        case '06' : data[1] = "junho"; break
        case '07' : data[1] = "julho"; break
        case '08' : data[1] = "agosto"; break
        case '09' : data[1] = "setembro"; break
        case '10' : data[1] = "outubro"; break
        case '11' : data[1] = "novembro"; break
        case '12' : data[1] = "dezembro"; break
    }
    let dataTrocada = `${data[0]} de ${data[1]} de ${data[2]}`
    return dataTrocada
}

botao.onclick = function() {
    let data = getValue("#input").split("/")
    let obj = document.querySelector("#resultado")
    data = mesExtenso(data)
    obj.innerHTML += `Você nasceu no dia ${data}.`
}