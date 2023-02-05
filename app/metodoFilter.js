const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click',filtrarLivrosDeFront))


function filtrarLivrosDeFront() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
  exibirLivrosNaTela(livrosFiltrados)
  if (categoria == 'disponivel') {
    let valorTotalDosLivros = calculaOvalorTotalDosLivros(livrosFiltrados)
    exibiroValorTotalDosLivrosDisponiveisNaTela(valorTotalDosLivros)
  }
  
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

// function calculaOvalorTotalDosLivros(livrosFiltrados) {
//   return livrosFiltrados.reduce((total, livroFiltrado) => total + livroFiltrado.preco,0)
  
// }


function exibiroValorTotalDosLivrosDisponiveisNaTela(valorTotalDosLivros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>
        Todos os livros disponíveis por R$
        <span id="valor">R$${valorTotalDosLivros.toFixed(2)}</span>
      </p>
    </div>
  `
}