let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value.trim();

  if (!nomeAmigo) {
    alert("Calma aí alecrim dourado, insira um nome válido!");
    return;
  }

  amigos.push(nomeAmigo);
  document.getElementById("amigo").value = "";
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach(amigo => {
    const itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nasceu de 7 meses foi? Antes de sortear, adicione pelo menos um nome para a mágica acontecer!");
    return;
  }

  const amigoSorteado = escolherAmigoAleatorio(amigos);
  document.getElementById("resultado").textContent = amigoSorteado;
}

function escolherAmigoAleatorio(listaAmigos) {
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  return listaAmigos[indiceAleatorio];
}
