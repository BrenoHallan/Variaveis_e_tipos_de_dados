//FUnÇÃO DE DECLARAÇÃO

function nome() {
  return "Olá mundo";
}

console.log(nome())






//FUNÇÃO ARROW
//A função arrow têm como característica principal o sinal "=>".

const operacaoMatematica = (numero1, numero2) => numero1 + numero2;

const calculo = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return `Somente numeros menores que 10`;
  } else {
    return num1 + num2;
  }
}