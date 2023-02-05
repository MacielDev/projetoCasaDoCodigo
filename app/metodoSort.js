let botaoOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
botaoOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
  let livrosOrdenadosPorPreco = livros.sort((a, b) => a.preco - b.preco)
  exibirLivrosNaTela(livrosOrdenadosPorPreco)
}