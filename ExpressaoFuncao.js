//FUNÇÃO DE DECLARAÇÃO

function texto() {
  return `Olá mundo`;
}

console.log(texto());




//FUNÇÃO DE EXPRESSÃO

const soma = function(num1, num2) {
  return num1 + num2;
}

//ou pode ser escrita em linha:
const conta = function(num1, num2) {return num1 + num2;}

console.log(soma(1, 1), conta(1, 1));