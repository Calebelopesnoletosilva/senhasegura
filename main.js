const numerosenha = document.querySelector('.paramenrtro-senha_texto');
let tamanhoSenha = 12;
numerosSnha.texContent = tamanhoSenha;
const letraMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMaisculas = 'abcdefghijklmnoprstuvwyz';
const numeros = '0123456789';
const simbolos = '!@%?';
const botoes = document.querySelector('.paranmetro-senha__botao');
const campoSenha = document.querySelectorAll('#campo-senha');
const  checkbox = document.querySelector('.checkbox');
const forcaSenha = document.querySelector('forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho

function diminuiTamanho(){
    if(tamanhoSenha >1){
        tamanhoSenha--;
}
numerosenha.textContent = tamanhoSenha;
geraSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha <20){
        tamanhoSenha++;
}
numerosenha.textContent = tamanhoSenha;
geraSenha();
}