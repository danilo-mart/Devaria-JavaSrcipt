const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosDisponiveis = [
    "Feijão",
    "Arroz",
    "Melancia",
    "suco",
    "Alface"
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

