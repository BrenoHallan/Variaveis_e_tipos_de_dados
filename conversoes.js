//tipo de dado

//conversão explícita
//conversão inplícita

const numero = 222;
const numeroString = '222';
let resultado;
let resultado2;
let resultado3;
let resultado4;




console.log(numero == numeroString);

//calculo
resultado = numero + numeroString;
console.log(resultado);

//calculo conversão
resultado2 = numero + Number(numeroString);
console.log(resultado);

//convertendo valor para string
resultado3 = String(numero) + numeroString;
console.log(resultado);


//usa-se "String()", "Number()" e "Boolean()" para converter tipos de dados.




//conversao Boolean
const dado1 = 0;
const dado2 = true;

console.log(Boolean(dado1));