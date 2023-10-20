//OPERADOES E COMPARACAO
//Operadores

// "==" comparacao inplicita
const numero1 = 0;
const numero2 = "0";

console.log(numero1 === numero2);

//"==" leva em consideração apenas as variável e não o tipo.
//"===" leva em consideração a variável e o tipo.





//Convertendo dados usando "Number()", "String()" ou "Boolean()"
const dado = "0";

console.log(`0 é igual a ${Number(dado)}`);







//OPERADORES ARITIMÉTICOS

console.log(2 + 2); //soma
console.log(2 - 1); //subtracao
console.log(10 / 5); //divisao
console.log(20 * 3); //multiplicacao
console.log(2 ** 8); //operador exponencial (2 elevado a 8)
console.log(1.25 % 1); //modulo


console.log((10 / 8) % 1 !== 0);
//10 dividdo por 8 é igual a 1.25... 1.25 modulo(%) 1 tem como resultado 0.25 ou seja, o modulo esta verificando se esse numero possui um resto. Se tiver resto, verifique se esse resto é estritamente nao igual(!==) a 0.

//"!=" Os operadores nao sao iguais.
//"!==" Os operadores nao sao iguais nem do mesmo tipo.