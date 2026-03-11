let listaNumerosSorteados = [];
let numeroMenor = 1;
let numeroMaior = 10;
let tentativas = 1;
let segredo = gerarNumeroAleatorio(numeroMaior);

function inicioJogo(){
    limparCampo();
    console.log(segredo);
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroMaior}`);
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

inicioJogo();

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if (chute!=segredo){
        if (chute > segredo){
            numeroMaior = chute;           
        }
        else {
            numeroMenor = chute;
        }
    let textoMeio = `Número Secreto está entre ${numeroMenor} e ${numeroMaior}`;
    exibirTextoNaTela('p',textoMeio);
    tentativas++;
    chute = parseInt(document.querySelector('input').value);
    limparCampo()  
    }
        
    else {
        exibirTextoNaTela('h1','Isso aí! Acertou :)');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let textoAcerto = `Achou o ${segredo} com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p',textoAcerto);
        limparCampo()
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}
    
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function gerarNumeroAleatorio(maximo){
    let numeroEscolhido = parseInt(Math.random() * maximo +1);
    let quantidadedeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadedeElementosNaLista == maximo){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido) ){
        return gerarNumeroAleatorio(maximo);
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function botaoReiniciar(){
    numeroMenor = 1;
    numeroMaior = 10;
    tentativas = 1;
    segredo = gerarNumeroAleatorio(numeroMaior);
    inicioJogo();
}

