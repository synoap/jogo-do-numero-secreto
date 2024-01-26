// Definindo variáveis
alert('Boas vindas ao jogo do número secreto');

// Entrada de dados do usuario
let nome = prompt('Qual seu nome?');
alert(`Olá, ${nome}!`);
let idade = prompt('Qual sua idade?');
console.log(`voce tem ${idade} anos de idade.`);

if (idade >= 18) {
  console.log('Voce tem idade e já pode jogar!,');
} else {
  console.log('Voce não tem idade e não pode jogar!');
}

// Verifique se o numero é positivo ou negativo
let numero = parseInt(prompt('Digite um número:'));
if (numero > 0) {
  console.log(`O número ${numero} é positivo`);
} else if (numero < 0) {
  console.log(`O número ${numero} é negativo`);
} else {
  console.log('O número é zero');
}

// loop imprime de 1 a 10
let contador = 1;

while(contador < 10 + 1) {
  console.log(`imprimindo ${contador}`);
  contador++;
}

let nota = parseInt(prompt('Qual sua nota?'));
let seNota = nota >= 7 ? 'aprovada' : 'reprovada';
console.log(`Sua nota foi ${seNota}`);

// Linguagem de programação
let linguagem = prompt('Qual linguagem de programação você mais gosta?');
console.log(`A linguagem ${linguagem} é muito legal!`);

// subtração
let valor1 = parseInt(prompt('Escolha um número.'));
let valor2 = parseInt(prompt('Escolha outro número.'));
let resultado = valor1 - valor2;
console.log(`A subtração de ${valor1} - ${valor2} é ${resultado}.`);

// numero secreto
let = numMax = 1000
const numeroSecreto = parseInt(Math.random() * numMax + 1);
let chute;
let tentativas = 1;

// Laço de repetição (while)
while(chute != numeroSecreto){
  chute = prompt(`Escolha um número entre 1 e ${numMax}`);
  if(chute == numeroSecreto){
    break;
  } else {
    if(chute > numeroSecreto){
      alert(`O número secreto é menor que ${chute}`)
    } else {
      alert(`O número secreto é maior ${chute}`)
    }
    tentativas++
  }
}

// Operador ternário para o plural da palavra tentativa.
const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`O número secreto era ${numeroSecreto}! E você acertou com apenas ${tentativas} ${palavraTentativa}`)

// numero aleatorio
let numeroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(`O número aleatório é ${numeroAleatorio}`)

let numAleatorioMil = parseInt(Math.random() * 1000 + 1);
console.log(`O número aleatóriode 1 a 1000 é ${numAleatorioMil}`)