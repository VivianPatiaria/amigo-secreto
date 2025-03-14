let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value;

  if (nomeAmigo.trim() === "") {
    alert("Calma aí alecrim dourado, insira um nome válido!");
  } else {
    amigos.push(nomeAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}


function sortearAmigo() {
  let quantidadeAmigos = amigos.length;
  if (quantidadeAmigos === 0) {
    alert("Nasceu de 7 meses foi? Antes de sortear, adicione pelo menos um nome para a mágica acontecer!");
  } else {
    let indiceAmigo = Math.floor(Math.random() * quantidadeAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
