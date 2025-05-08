const botao = document.querySelector("#executa")
const resposta = document.querySelector("#resposta")
const palavras = ["xablau", "gatos", "escalfoni", "toca", "cefet", "otorrinolaringologista", "astronauta", "morango", "cinema", "mitski"]

const palavraSorteada = palavras[Math.trunc(Math.random() * palavras.length)].toUpperCase()
console.log(palavraSorteada)

botao.addEventListener("click", function () {
  const letra = document.querySelector("#letra").value.toUpperCase()
  for (let i = 0; i < palavraSorteada.length; i++) {
    if (letra == palavraSorteada[i]) {
      resposta.innerHTML += letra
    }
    else resposta.innerHTML += "_ "
  }
})
