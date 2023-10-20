//Dados type string

const texto1 = "pedaço de texto"; //usa-se aspas duplas ou simples
const texto2 = 'alguma coisa';
const texto3 = "15523344";

//aspas simples e duplas na mesma string
const textoAspas = 'O gato disse "miau"'//Atenção! Gatos não falam!




//template string - pedacos dinamicos em seu texto.
const nome = "Breno";
const idade = 18;

const frase = `Olá meu nome é ${nome} e tenho ${idade} anos de idade!`;

console.log(frase);




//Padroes de nomes no java.script
const padraoTexto1 = "Palavra";
const padraoTexto2 = "palavra";

console.log(padraoTexto1.toLowerCase());

//!NAO ESQUECA DO PONTO E VIRGULA NO FINAL ";"...ISSO E IMPOTANTE.
//nesse caso, se nao tivesse ponto e virgula o resultado seria esse no console: "[function: toLowerCase]"