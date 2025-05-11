const botao = document.querySelector("#executa")
const resposta = document.querySelector("#resposta")
const palavras = ["xablau", "gatos", "escalfoni", "toca", "cefet", "otorrinolaringologista", "astronauta", "morango", "cinema", "mitski"]

const palavraSorteada = palavras[Math.trunc(Math.random() * palavras.length)].toUpperCase()

let arrayPalavra = []
for (let i = 0; i < palavraSorteada.length; i++) {
  arrayPalavra[i] = "_"
}
resposta.innerHTML = arrayPalavra

const img = document.querySelector("#img")

let tentativas = 6
let venceu = 0
let letrasErradas = []
let letraRepetida

const verificaRepeticao = (letra) => {
  letraRepetida = false
  for (let i = 0; i < letrasErradas.length; i++) {
    if (letrasErradas[i] === letra) {
      letraRepetida = true
      break
    }
  }
  if (!letraRepetida) {
    letrasErradas.push(letra)
  }
}

const exibeImagem = () => {
  switch(tentativas) {
    case 5 : img.src="../jogoDaForca/img/2.jpg"; break
    case 4 : img.src="../jogoDaForca/img/3.jpg"; break
    case 3 : img.src="../jogoDaForca/img/4.jpg"; break
    case 2 : img.src="../jogoDaForca/img/5.jpg"; break
    case 1 : img.src="../jogoDaForca/img/6.jpg"; break
    case 0 : img.src="../jogoDaForca/img/7.jpg"; break
  } 
}

botao.addEventListener("click", function () {
  const letra = document.querySelector("#letra").value.toUpperCase()
  let letraCorreta = false
  for (let i = 0; i < palavraSorteada.length; i++) {
    if (letra == palavraSorteada[i] && arrayPalavra[i] == "_") {
      arrayPalavra[i] = letra
      letraCorreta = true
      venceu++
    }
  }
  if (!letraCorreta) {
    verificaRepeticao(letra)
    tentativas--
  }

  resposta.innerHTML = arrayPalavra + "<br> Tentativas = " + tentativas + "<br> Letras erradas: " + letrasErradas
  exibeImagem()
  if (tentativas == 0) {
    alert("Você perdeu... A palavra era " + palavraSorteada)
    location.reload()
  }
  if (venceu === palavraSorteada.length) { 
    alert("Você venceu! A palavra era " + palavraSorteada)
    location.reload()
  }
})
