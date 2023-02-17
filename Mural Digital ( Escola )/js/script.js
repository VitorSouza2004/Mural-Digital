


//ouvinte / gatilho de disparo
var form = document.getElementById("meu-form");
var resposta = document.getElementById("resposta");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var nome = document.getElementById("nome").value;
  var tituloImagem = document.getElementById("tituloImagem").value;
  var descricao = document.getElementById("descricao").value;
  var categoria = document.getElementById("categoria").value;
  var imagem = document.getElementById("imagem").value;

  // Aqui você pode adicionar o código para enviar essas informações para o servidor
  // ou armazená-las em um banco de dados

  resposta.innerHTML = "<p>Nome: " + nome + "</p><p>Título da Imagem: " + tituloImagem + "</p><p>Descrição: " + descricao + "</p><p>Categoria: " + categoria + "</p><p>Imagem: " + imagem + "</p>";
});