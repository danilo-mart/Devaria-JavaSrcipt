const readline = require('readline');
const Produto = require('./Produto');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosDisponiveis = [
    new Produto ("Feijão", 5),
    new Produto ("Arroz",10.5),
    new Produto ("Melancia",6.8),
    new Produto ("suco",7.66),
    new Produto ("Alface", 1.20),
];

const validarLista = (listaMercado) => {
    if (!listaMercado) { 
        throw Error("A lista não pode ser vazia");

    }
    const itensDesejados = listaMercado.split(",")
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;

    if (itensInvalidos > 0) {
        throw Error(`Existem ${itensInvalidos} itens invalidos`) ;
    }

    return itensDesejados;
}

leitor.question(
    "DIGITE A LISTA DE PRODUTOS SEPARADOS POR VIRGULA:\n",
    listaProdutos => {
        try{
            validarLista(listaProdutos);
            console.log("lista validada",{listaProdutos});
            
        }catch(e){
            console.log(`erro ao processar a lista (${e.message})`);
        } finally {
            leitor.close();
        }


    }
);
