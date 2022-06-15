//calcular promedio de notas//


let  pn = prompt("Ingrese la Primera Nota", );
let  sn = prompt("Ingrese la Segunda Nota", );
let  tn = prompt("Ingrese la Tercera Nota", );
let result = Number(pn) + Number(sn) + Number(tn);
   promedioNota(result);


function promedioNota(r){
    return alert("El Promedio de Nota es:" + " " + (r/3));
}