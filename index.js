const prompt = require('prompt-sync')();
const funcao = require('./jogo.js');

while (true) {

    console.log(`1. Cadastrar.
    2. Listar.
    3. Atualizar.
    4. Remover.
    5. Finalizar.`);

    const opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case 1:

        funcao.criar();

            break;

        case 2:

        funcao.lista();

            break;

        case 3:

        funcao.atualizar();

            break;

        case 4:

        funcao.remove();

            break;

        case 5:

        process.exit();

            break;


        default:

            console.log('Opção inválida.');

            break;
    }
};