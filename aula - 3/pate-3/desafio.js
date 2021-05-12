const TipoDePagamento = require("./TipoDePagamento");

const formaDePagamento = process.argv[2];
const valor = process.argv[3];

if(!formaDePagamento){
    console.log('Forma de pagamento não informado');
    return;
}

if (!valor){
    console.log('Valor não informado');
    return;
}

if(formaDePagamento.toLowerCase() !== TipoDePagamento.BOLETO.toLocaleLowerCase());
if(formaDePagamento.toLowerCase() !== TipoDePagamento.BOLETO.toLocaleLowerCase());