const prompt = require('prompt-sync')();
const jogos = [];

const registro = () => {
    let jogo

    while (true) {
        jogo.nome = prompt('Qual é o nome do jogo? ');
        if (jogo.nome == '') {
            console.log('O nome não pode ser vazio.');
        } else {
            break;
        }
    }

    while (true) {
        jogo.anoLancamento = Number(prompt('Qual é o ano de lancamento do jogo? '));
        if (jogo.anoLancamento < 1958 || jogo.anoLancamento > 2024 || isNaN(anoLancamento) ) {
            console.log('Ano inválido.');
        } else {
            break;
        }
    }

    while (true) {
        jogo.duracao = Number(prompt('Qual é a duração do jogo? ').replaceAll(',', '.'));
        if (jogo.duracao <= 0 || jogo.duracao > 2024 || isNaN(duracao) ) {
            console.log('Duração inválido.');
        } else {
            break;
        }
    }
};