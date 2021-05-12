const Animal = require('./Animal');

class Repitl extends Animal{
    constructor(nome, controlaTemperaturaCorpo){
        super(nome);
        this.controlaTemperaturaCorpo = controlaTemperaturaCorpo || false;
    }

}

module.exports = Repitl;