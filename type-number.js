//Dados typo number

var myNumber = 5;

const num1 = 20;
const num2 = 2;

const operacaoMatematica = num1 / num2;

console.log(operacaoMatematica);

//NaN "Not A Number" - nao é um numero... quando o java.script não consegue identificar um numero em uma determinada operacao matematica.



//floating point "ponto flutuante" - não são numeros inteiros
var myFloatingNumber = 5.5;

const floatingNum1 = 2.6;
const floatingNum2 = 5.7;

const operacaoMatematicaFloating = floatingNum1 / floatingNum2;

//console.log(operacaoMatematicaFloating);




//verifica se o resultado "operacaoMatematica" é um numero inteiro ou não.
if (operacaoMatematica % 1 !== 0) {
    console.log("Essa operação não possui um número inteiro como resultado.")
} else {
    console.log("Essa operação tem como resultado um número inteiro.")
}