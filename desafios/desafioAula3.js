/*
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
*/

function calculoIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

console.log("O IMC é " + calculoIMC(1.73,63).toFixed(2));

/*
Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
*/

function calculoFatorial(numero) {
    let fatorial = 1;

    for (let i = numero; i > 0; i--) {
        fatorial = i * fatorial;
    }

    return fatorial;
}

console.log("O Fatorial de 5 é " + calculoFatorial(5));

/*
Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente 
em reais. Para isso, considere a cotação do dólar igual a R$4,80.
*/

function converterDolar(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorConvertido = valorEmDolar * cotacaoDolar;

    return valorConvertido.toFixed(2);
}

console.log("$ 2,00 convertido em real é igual " + converterDolar(2));

/*
Crie uma função que mostre na tela a área e o perímetro de uma 
sala retangular, utilizando altura e largura que serão dadas como parâmetro.
*/

function calculoAreaRetangular(altura, largura){
    let area, perimetro, textoAreaRetangular;

    area = largura * altura;
    perimetro =  2 * (largura + altura);

    textoAreaRetangular = `Área: ${area} e Perímetro: ${perimetro}`;

    return textoAreaRetangular;
}

console.log(calculoAreaRetangular(5, 10));

/*
Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que 
será fornecido como parâmetro. Considere Pi = 3,14.
*/

function calculoAreaCircular(raio){
    let area, perimetro, textoRaio;
    let ValorPi = 3.14;

    area = ValorPi * Math.pow(2,2); //raio²
    perimetro =  2 * ValorPi * raio;

    textoRaio = `Área: ${area} e Perímetro: ${perimetro}`;

    return textoRaio;
}

console.log(calculoAreaCircular(7));

/*
Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

function tabuadaNumero(numero) {
    let textoTabuada = `Tabuada do número ${numero}\n`;

    for (let i = 1; i <= 10; i++) {
        const tabuada = numero * i;
        textoTabuada += `\n${numero} x ${i} = ${tabuada}`;
    }

    return textoTabuada;
}

console.log(tabuadaNumero(10));