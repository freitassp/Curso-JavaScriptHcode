//let olaMundo = 'Hello word';

//console.log(olaMundo);
/*let cor = 'azul';

switch (cor) {

     case 'verde':
    console.log("verde");
    break;

    case 'zul':
    console.log("verde");
    break;

    default:
        console.log("teste");
}
*/
/*function calc(x1,x2,operator){

return eval(` ${x1} ${operator} ${x2}`  )  ;

}

let resultado = calc(10, 2,"+");
console.log(resultado);
*/

//funcao 
let calc = (x1,x2,operator) => {

    return eval(` ${x1} ${operator} ${x2}`  );
    
    }
let resultado = calc(1,2,"*") ;
console.log(resultado);
