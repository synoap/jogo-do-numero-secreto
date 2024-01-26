// Nossas variaveis
let listaNumerosSorteados = [];
let numLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
var numTentativas = 1;

// Input [0-9] apenas
document.querySelector('.container__input').addEventListener("keyup", function() {
  this.value = this.value.replace(/[^0-9]/g, "");
});

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
  {rate: 1.2});
}

function exibirMsgInitial() {
  exibirTextoNaTela('h1', 'Jogo do Número Secreto!');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
  let qtdDeObjectsNaLista = listaNumerosSorteados.length;

  if(qtdDeObjectsNaLista == numLimite) {
    listaNumerosSorteados = [];
  }
  
  if(listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados)
    return numeroEscolhido;
  }
}

function verificarChute() {
  let palavaTentativa = numTentativas > 1 ? 'tentativas' : 'tentativa';
  let chute = document.querySelector('.container__input').value;
  let msgTentativas = `Você acertou o número secreto com ${numTentativas} ${palavaTentativa}!`;
  if(chute > numeroSecreto) {
    exibirTextoNaTela('p', `O número secreto é menor que: ${chute}`);
  } else if(chute < numeroSecreto) {
    exibirTextoNaTela('p', `O número secreto é maior que: ${chute}`);
  } else {
    exibirTextoNaTela('h1', 'Você acertou!');
    exibirTextoNaTela('p', msgTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
  numTentativas++;
  limparInput();
}

function limparInput() {
  chute = document.querySelector('.container__input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparInput();
  numTentativas = 1;
  exibirMsgInitial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
} exibirMsgInitial();
