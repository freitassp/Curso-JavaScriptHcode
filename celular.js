class Celeular {

    constructor(){

        this.cor = "prata";
    }

    ligar(){

        console.log("Uma ligação");
        return "ligando";
    }

}

let objeto = new Celeular();
console.log(objeto.ligar());