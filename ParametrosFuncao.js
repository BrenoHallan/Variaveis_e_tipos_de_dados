//Parametros de uma função

function soma(firstNumber, secondNumber) {
  return(firstNumber + secondNumber);
}

console.log(soma(1, 2));







//"return" --- Retorna o valor da função.
//Veja o exemplo abaixo

const numero1 = false;
const numero2 = 75;


//Este é um exemplo de função com parâmetro. Nesse caso a função espera receber dois valores (numero1 e numero2)
function operacaoMatematica(numero1, numero2) {

  numero1 = Number(numero1);
  numero2 = Number(numero2);
  //fazer conversõa de tipo string ou boolean para tipo number.

  if (numero1 >= 1000 || numero1 <= 0 || numero2 >= 1000 || numero2 <= 0) {
    console.log(`ERRO --- Os valores (${numero1}, ${numero2}) devem estar entre 1 e 999`)
  } else {
    return numero1 + numero2
    //return
  }

}

const resultado = operacaoMatematica(numero1, numero2);

console.log(resultado);