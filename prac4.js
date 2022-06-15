const S = 15000;

let C = prompt("Ingrese el valor de la Venta", 0);
 
   sueldo(S, C);

function sueldo(S, C){
    return console.log(C *0.05 + S);
}