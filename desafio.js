const listaPessoas = ["Douglas", "Rafael", "Daniel"]

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if (!listaPessoas.includes(nome)){
    console.log("vc n foi convidado!");
    return;
}

if (idade < 18){
    console.log("Apenas maior de idade podem entrar na festa");
    return;

}

console.log("Seja bem vindo")