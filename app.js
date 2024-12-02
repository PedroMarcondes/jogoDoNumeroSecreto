let listaNumerosSorteados = [];
let numeroMaximo = 20, numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Dê um chute para adivinhar o número entre 1 e 20');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(numeroMaximo) {
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    let quantDeElementosNaLista = listaNumerosSorteados.length;

    if (quantDeElementosNaLista == numeroMaximo) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio(numeroMaximo);
        // RESOLVIDO - MOTIVO FUNCAO SEM PARAMETRO - RETORNAVA UNDEFINED E ADICIONAVA NaN NA LISTA
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        //console.log(listaNumerosSorteados);
        return numeroSorteado;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

//function reiniciarJogo = numeroSecreto = gerarNumeroAleatorio() => return numeroSecreto;
