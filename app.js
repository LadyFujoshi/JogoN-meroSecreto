/*let titulo = document.querySelector('h1'); 
titulo.innerHTML =  'Jogo do Número Secreto'; 

let paragrafo = document.querySelector('p'); 
paragrafo.innerHTML =  'Escolha um número entre 1 a 10';*/
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = numeroAleatorio2();
let tentativas = 1;


function inserirTexto(tag,texto) { // função com aparâmetro

    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rarte:1.2}); //meio que um programa que le o que ta escrito, necessáriio adicionar ele com scripst no html 

}

function incioDoJogo(){
    
    
    inserirTexto('h1', 'Jogo do Número Secreto'); 
    inserirTexto('p', 'Escolha um númeo de 1 a 10');

}

incioDoJogo();


function verificarChute() { 

    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) { 

        inserirTexto('h1', 'Você acertou!!'); 
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou com ${tentativas} ${palavraTentativa}`;
        inserirTexto('p',mensagem); 
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else{ 

        if (chute > numeroAleatorio){ 

            inserirTexto('p', 'O número secreto é menor');

        } else {
            inserirTexto('p','O número secreto é maior');
        } 
        
    }tentativas++;
    limparTela();
} 

function numeroAleatorio2() { 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {

        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio2(); 

    } else{ 
        listaDeNumerosSorteados.push(numeroEscolhido); 
        return numeroEscolhido;
    }
    


}

function limparTela(){

    chute = document.querySelector('input'); 
    chute.value = '';


}

function reiniciarJogo(){
    numeroAleatorio = numeroAleatorio2();
    limparTela();
    tentativas = 1;
    incioDoJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);

} 