let numeroCarro = 1;
const lavarcarro = () =>{
    console.log(`lavando carro ${numeroCarro}`);
}    
    //const verificarTemCarroNaFila: () => Boolean

const verificarTemCarroNaFila = () => {
    return(
        numeroCarro < 10
    );
}

let temCarroNaFila = true;
while (temCarroNaFila){
    lavarcarro();
    temCarroNaFila = verificarTemCarroNaFila();
    numeroCarro++;
}