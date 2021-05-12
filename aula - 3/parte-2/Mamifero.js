const Animal = require('./Animal');

class Mamifero extends Animal{
    constructor(nome, quantidadedDeMamas){
        super(nome);
        this.quantidadedDeMamas = quantidadedDeMamas;
    }
}

module.exports = Mamifero;