let n1 = prompt("Ingrese el Primer Numero",);
let n2 = prompt("Ingrese el Segundo Numero",);
 valores(n1,n2);

function valores(n1,n2){
    return alert("La suma es: " + (Number(n1) + Number(n2)) + " La resta es: " + Number(n1-n2) + " El producto es: " + Number(n1*n2) + " La division es: " + Number(n1/n2));
}