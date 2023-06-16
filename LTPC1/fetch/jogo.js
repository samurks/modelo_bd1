prompt ("seu nome")
const NUM_MOEDAS = 40;
const TEMPO_INICIAL = 15;
let pontos = 0;
let tempo = 0;
let time = null;

function iniciaJogo(){

  // Função para criar um elemento HTML e adicionar ao container


function criarElemento(nome, pontucao) {
  const container = document.getElementById('container');
  const nome = document.createElement('h3');
  const pontuacao = document.createElement('h4');

  nome.textContent = nome;
 pontuacao.textContent = pontuacao;

  container.appendChild(nome);
  container.appendChild(pontuacao);
}


fetch('http://localhost:5050/score')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    // Processar os dados e exibir a lista no HTML
    console.log(data.results);

    const jogadores = data.results;

    jogadores.forEach(jogador => {
      criarElemento(jogador.name, jogador.pontuacao);
    });
  })
  .catch(error => {
    console.error(error);
  });

  
pontos = 0;
tempo = TEMPO_INICIAL;
let tela = document.getElementById("tela");
tela.innerHTML = "";

 for(let i = 0 ; i < NUM_MOEDAS; ++i) {
    let moeda = document.createElement("img");
    moeda.src = "moeda100x.png";
    moeda.id = "m"  +  i ;
    moeda.onclick = function(){
        pegaMoeda(this);
    }
    tela.appendChild(moeda);
 }
}
timer = setInterval(contarTempo, 1000);
  


function pegaMoeda(moeda) {
  if (tempo <= 0) return;
  moeda.onclick = null;
  moeda.src = "moedaCx.png";
  ++pontos;

  let contadorPontos = document.getElementById("pontos");
  contadorPontos.innerText = pontos;
}

function contarTempo() {
  --tempo;
  let contadorTempo = document.getElementById("tempo");
  contadorTempo.innerText = tempo;

  if (tempo <= 0) {
    clearInterval(timer);
    alert("Parabéns, você fez " + pontos + " pontos!");
    iniciaJogo();
  }
  
}



