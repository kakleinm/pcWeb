const botao = document.querySelector("#executa")
const getValue = seletorDom => document.querySelector(seletorDom).value

const nivelSenha = senha => {
    let nivelSenha = "";
    let temLetra = false, temEspecial = false, temNumero = false;

    for (let i = 0; i < senha.length; i++) {
        if (('a' <= senha[i] && senha[i] <= 'z' ) || ('A' <= senha[i] && senha[i] <= 'Z') ) temLetra = true;
        if (0 <= senha[i] && senha[i] <= 9) temNumero = true;
        if (33 <= senha.charCodeAt(i) && senha.charCodeAt(i) <= 47 || 58 <= senha.charCodeAt(i) && senha.charCodeAt(i) <= 64 || 91 <= senha.charCodeAt(i) && senha.charCodeAt(i) <= 95) temEspecial = true;
    }
    
    if (temLetra && temNumero && temEspecial) nivelSenha = "Senha forte."
    else if (temLetra && temNumero) nivelSenha = "Senha moderada."
    else if (temLetra) nivelSenha = "Senha fraca."
    return nivelSenha;
}

botao.onclick = function() {
    let senha = getValue("#input")
    let obj = document.querySelector("#resultado")
    let nivel = nivelSenha(senha)

    if (nivel == "Senha fraca.") obj.style.color = "red"
    if (nivel == "Senha moderada.") obj.style.color = "orange"
    if (nivel == "Senha forte.") obj.style.color = "green"
    
    obj.innerHTML = nivel
}