window.addEventListener('focus', event => {

    console.log('focus');

});

document.addEventListener('click', event => {

    console.log('click');


});

let agora = new Date();
console.log(agora.toLocaleDateString("pt-br"));

let carros = ["palio","toro","uno",10,true, new Date(), function(){}];
console.log(carros[2]);


carros.forEach(function(value, index){
    console.log(index, value);


});

let celular = function(){
    this.cor = "prata";

    this.ligar = function(){

        console.log("uma ligação");
    }
}

let objeto = new celular();

console.log(objeto.cor);