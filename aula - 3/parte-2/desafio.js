const Ave = require('./Ave')
const Repitl = require('./Reptil')
const Mamifero = require('./Mamifero')
const Peixe = require('./Peixe')


const nomeAnimal = process.argv[2];
if(!nomeAnimal){
    console.log('favor passar o nome do animal');
    return;
}

const listaAnimais = [
    new Mamifero('vaca', 4),
    new Repitl ('cobra'),
    new Ave ('gavião', true),
    new Peixe('Tubarão', 2),
    
];

const animalSelecionado = listaAnimais.find(animal => 
    animal.nome.toLowerCase() === nomeAnimal.toLowerCase());

if (!animalSelecionado){
    console.log(`Não encontramos este animal na nossa lista!`);
    return;
}

if (animalSelecionado instanceof Mamifero){
    console.log (`O animal encontrado é mamifero com nome 
    ${animalSelecionado.nome} e quantidade de mamas é ${animalSelecionado.quantidadedDeMamas}`);
} else if (animalSelecionado instanceof Repitl){
    console.log (`O animal encontrado é Reptil com nome 
    ${animalSelecionado.nome} e controla temperatura ${animalSelecionado.controlaTemperaturaCorpo}`);
}  else if (animalSelecionado instanceof Ave){
    console.log (`O animal encontrado é Ave com nome 
    ${animalSelecionado.nome} ele voa ${animalSelecionado.voa}`);
}   else if (animalSelecionado instanceof Peixe){
    console.log (`O animal encontrado é Peixe com nome 
    ${animalSelecionado.nome} e quantidade de nadadeiras é ${animalSelecionado.quantidadeDeNadadeiras}`);
} 