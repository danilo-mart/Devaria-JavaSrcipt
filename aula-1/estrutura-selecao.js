const marca = process.argv[2];

if (marca === "volks") {
    console.log("if - marca volks atendida");
} else if (marca === "ford") {
    console.log("if - marca ford atendida");
} else {
    console.log("if - marca não atendida");
}

switch (marca) {
    case "volks":
        console.log("switch - volks atendida");
        break;
    case "ford":
        console.log("switch - ford atendida");
        break;
    default:
        console.log("switch - marca não atendida");
}
