const botao = document.querySelector("#executa")
const getValue = seletorDom => document.querySelector(seletorDom).value

const converte = frase => {
    let fraseAlt = ""
    for (let i = 0; i < frase.length; i++) {
        switch (frase[i]) {
            case 't' : fraseAlt += 'p'; break;
            case 'p' : fraseAlt += 't'; break;
            case 'e' : fraseAlt += 'o'; break;
            case 'o' : fraseAlt += 'e'; break;
            case 'n' : fraseAlt += 'l'; break;
            case 'l' : fraseAlt += 'n'; break;
            case 'i' : fraseAlt += 'a'; break;
            case 'a' : fraseAlt += 'i'; break;
            case 's' : fraseAlt += 'r'; break;
            case 'r' : fraseAlt += 's'; break;
            default : fraseAlt += frase[i]
        }
    }
    return fraseAlt;
}

const questao8 = () => {
    let frase = getValue("#frase").toLowerCase()
    let obj = document.querySelector("#resultado")
    let fraseAlt = converte(frase)
    obj.innerHTML = fraseAlt
}

botao.addEventListener("click", questao8)