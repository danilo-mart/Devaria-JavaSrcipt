const listaMarcas  = ["volks", "ford"];
const marca = process.argv[2] ;

if (marca === "volks") {
    console.log("marca volks atendida");  
} else if (marca === "ford") {
    console.log("marca ford atendida");
} else {
    console.log("marca não atendida")
}

switch (marca){
    case "volks":
        console.log("swich- volks")
        break;
    case "ford":
        console.log("swick - ford")
        break
    default:
        console.log ("marca n atendida")
}