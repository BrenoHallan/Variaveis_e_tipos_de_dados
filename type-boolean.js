const firstNumber = 1;
const secondNumber = 1;

if (firstNumber === secondNumber) {
    console.log("verdade");
} else {
    console.log("mentira");
}


//tipo boolean - exemplos de dados string.
const firstText = "Palavra";
const secondText = "palavra";
//javasript faz a diferenciacao de maiusculas e minusculas!

console.log(firstText === secondText);




//BOOLEAN
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

//em algumas linguagens de programacao... "0" e "1" pode substituir false e true:
//0 --> false;
//1 --> true;

//agora vamos ver se "0" é true ou false.
console.log(1 == true); // "==" compara o valor apenas, o "===" compara valor e tipo.

//strings vazias tambem sao consideradas como false:
console.log("" == false);
