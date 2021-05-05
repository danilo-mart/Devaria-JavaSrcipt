let atividadesPendentes;
let atividadesRealizadas = 0;

const consultarAtividadesDoDia = () =>{
    if (atividadesRealizadas===3){
        return[];
    }

    return[
        "atividade 1",
        "atividade 2",
        "atividade 3"
    ];
}

const informarAtividades = (atividades) =>{
    if(atividades.length === 0){
        console.log('Você não tem ,mais atividades pendentes.');
        return;
    }
    console.log(`Atividades pendentes ${atividades}`)
}
do{
    atividadesPendentes = consultarAtividadesDoDia();  
    informarAtividades (atividadesPendentes); 
    atividadesRealizadas++;
} while (atividadesPendentes.length > 0);