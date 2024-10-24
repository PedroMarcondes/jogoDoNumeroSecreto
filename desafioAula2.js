let nome = "Pedro";

function olaPessoa(nomePessoa) {
    return `Olá, ${nomePessoa}!!`;
}

function dobroNumero(numero){
    return 'O dobro do número é ' + numero*2;
}

let num = 5;

let num1 = 5, num2 = 7, num3 = 3;

function mediaNumeros(numero1, numero2, numero3) {
    return 'A média é ' + (numero1 + numero2 + numero3) / 3;
}

function maiorNumero(numero1, numero2){
    if(numero1 > numero2){
        return `O maior número é ${numero1}`;
    } else {
        return `O maior número é ${numero2}`;
    }
}

function multiplicaNumero(num){
    return num * num;
}

console.log("Olá, mundo!");
console.log(olaPessoa(nome));
console.log(dobroNumero(num));
console.log(mediaNumeros(num1,num2,num3));
console.log(maiorNumero(num1,num2));
console.log(multiplicaNumero(num2));