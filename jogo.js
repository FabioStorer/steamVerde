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
        if (jogo.anoLancamento < 1958 || jogo.anoLancamento > 2024 || isNaN(jogo.anoLancamento) ) {
            console.log('Ano inválido.');
        } else {
            break;
        }
    }

    while (true) {
        jogo.duracao = Number(prompt('Qual é a duração do jogo? ').replaceAll(',', '.'));
        if (jogo.duracao <= 0 || isNaN(jogo.duracao) ) {
            console.log('Duração inválido.');
        } else {
            break;
        }
    }

    while (true) {
        jogo.preco = Number(prompt('Qual é o preço do jogo? ').replaceAll(',', '.'));
        if (jogo.preco != 0 || isNaN(jogo.preco) ) {
            console.log('Preço inválido.');
        } else {
            break;
        }
    }

    while (true) {
        jogo.estudio = prompt('Qual é o estúdio do jogo? ');
        if (jogo.estudio == '') {
            console.log('O estúdio não pode ser vazio.');
        } else {
            break;
        }
    }

    while (true) {
        jogo.sequencia = parseInt(prompt('Qual é a sequencia do jogo? '));
        if (jogo.sequencia < 0 || jogo.sequencia >= jogos.length) {
            console.log('A sequencia não pode ser vazio.');
        } else {
            break;
        }
    }

    jogos.push(jogo);
};