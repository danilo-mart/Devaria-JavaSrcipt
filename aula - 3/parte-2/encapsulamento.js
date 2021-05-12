class Produto{

    #nome;
    #preco;
    #tipo;

    Constructor (nome, preco){
        this.#nome = nome;
        this.#preco = preco;
        this.#tipo = 'móvel';
    }
    
    get nome(){
        return this.#nome;
    }
    
    get preco(){
        return this.#preco;
    }

}

const produto = new Produto("Monitor", 2500);
console.log(produto.nome, produto.preco);