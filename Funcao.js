//FUNÇÃO

let x = "";
console.log(x);
x = "oi";
//A leitura do código é feita de cima para baixo. Como o "x" foi declarado depois do "console.log(x)", o resultado foi uma string vazia.

//As funções também servem para que executemos um determinado código a qualquer momento.




//Primeiro momento = declaração da função.
//Segundo momento = executa a função 1 ou + vezes.

let palavra = "olá";
let palavra1 = "casa";
let palavra2 = "ilha";

function imprimeTexto(texto){
  console.log(texto);
}

imprimeTexto(palavra);
imprimeTexto(palavra1);
imprimeTexto(palavra2);




function operacaoMatematica(){
  const operacao = 1 + 1;
  return(operacao);
}

console.log(operacaoMatematica());




//Função dentro de outra função
function entity(){
  return(2 + 2);
}

function indice(objeto){
  console.log(objeto);
}

indice(entity());