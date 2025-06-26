const produtos = [
  { id: 1, nome: "Mouse", preco: 59.9, quantidade: 12 },
  { id: 2, nome: "Teclado", preco: 99.9, quantidade: 5 },
  { id: 3, nome: "Monitor", preco: 799.9, quantidade: 2 },
  { id: 4, nome: "Cabo HDMI", preco: 29.9, quantidade: 30 },
  { id: 5, nome: "Pen Drive", preco: 49.9, quantidade: 0 },
  { id: 6, nome: "Webcam", preco: 199.9, quantidade: 4 },
  { id: 7, nome: "SSD 240GB", preco: 299.9, quantidade: 6 },
  { id: 8, nome: "HD Externo", preco: 499.9, quantidade: 3 },
  { id: 9, nome: "Notebook", preco: 3499.9, quantidade: 1 },
  { id: 10, nome: "Suporte de Notebook", preco: 89.9, quantidade: 0 }
];

const seletor = (seletor) => document.querySelector(seletor)

const busca = seletor("#buscaProduto")
const lista = seletor("#listaProdutos")
const nome = seletor("#nomeProdutos")
const valor = seletor("#valorTotal")
const esgotados = seletor("#produtosEsgotados")
const justos = seletor("#precosJustos")

const resultadoBusca = seletor("#resultadoBusca")
const resultado = seletor("#resultado")

const buscarProduto = () => {
  let produto = seletor("#buscar").value
  resultadoBusca.innerHTML = ""
  let achado = produtos.find(function (item) {
    return item.nome === produto
  })
  if (achado != undefined) {
    resultadoBusca.innerHTML += "<b>Id</b> " + achado.id + "<br>"
    resultadoBusca.innerHTML += "<b>Nome do produto</b> " + achado.nome + "<br>"
    resultadoBusca.innerHTML += "<b>Preço</b> " + achado.preco + "<br>"
    resultadoBusca.innerHTML += "<b>Quantidade</b> " + achado.quantidade
  }
  else {
    resultadoBusca.innerHTML = ""
    resultadoBusca.innerHTML = "Produto não encontrado."
  }
}

const listarProdutos = () => {
  resultado.innerHTML = ""
  produtos.forEach(function (item) {
    resultado.innerHTML += "<em>Nome</em> " + item.nome + "<br>"
    resultado.innerHTML += "<em>Preço</em> " + item.preco + "<br>"
    resultado.innerHTML += "<em>Quantidade</em> " + item.quantidade + "<br><br>"
  })
}

const mostrarNomes = () => {
  resultado.innerHTML = ""
  let novoArray = []
  novoArray = produtos.map(item => item.nome)
  novoArray.forEach(function (item) {
    resultado.innerHTML += item + "<br>"
  })
}

const calcularTotal = () => {
  resultado.innerHTML = ""
  let soma = 0;
  soma = produtos.reduce((soma, produto) => soma + produto.quantidade * produto.preco, 0)
  resultado.innerHTML = "Valor total do estoque é R$" + soma
}

const verificarEsgotados = () => {
  resultado.innerHTML = ""
  let esgotado = produtos.some(function (item) {
    return item.quantidade === 0
  })
  if (esgotado) {
    resultado.innerHTML += "Há produtos esgotados."
  }
  else resultado.innerHTML += "Não há produtos esgotados."
}

const verificarPrecos = () => {
  resultado.innerHTML = ""
  let justo = produtos.every(function (item) {
    return item.preco > 10
  })
  if (justo) resultado.innerHTML += "Todos os produtos têm preço justo."
  else resultado.innerHTML += "Há produtos com preço muito baixo."
}

busca.addEventListener("click", buscarProduto)
lista.addEventListener("click", listarProdutos)
nome.addEventListener("click", mostrarNomes)
valor.addEventListener("click", calcularTotal)
esgotados.addEventListener("click", verificarEsgotados)
justos.addEventListener("click", verificarPrecos)