//O JavaScript tem uma particularidade, que são três formas de escrever variáveis: var, let e const.

let altura = 15;
let comprimento = 30;
let forma = 'Retângulo';
let area;

if (forma === 'Retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

// As variaveis possuem valores que podem ser alterados ao longo do codigo, isso pode gerar bugs e erros inesperados na aplicacao.

//Por esse motivo usamos o "let" e o "const". o const possui um valor constante.


//calculando a area do circulo.
const pi = 3.14;
const raio = 5;
const figura = 'circulo';
let areaCirculo;

if (figura === 'circulo') {
    areaCirculo = pi * (raio * raio);
} else {
    console.log('Nao e um circulo!')
}

console.log(areaCirculo);