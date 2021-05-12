const Animal = require('./Animal');

class Peixe extends Animal{
    constructor(nome, quantidadeDeNadadeiras){
        super(nome);
        this.quantidadeDeNadadeiras = quantidadeDeNadadeiras;
    }
}

module.exports = Peixe;