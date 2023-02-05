function calculaOvalorTotalDosLivros(livrosFiltrados) {
  return livrosFiltrados.reduce((total, livroFiltrado) => total + livroFiltrado.preco,0)
}