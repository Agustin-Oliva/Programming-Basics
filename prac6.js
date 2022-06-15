//PIDO DATOS//
let mt = prompt("Ingrese M2 totales", );
let mc = prompt("Ingrese m2 cubiertos", );
//CALCULO METROS DESCUBIERTOS//
let md = mt - mc;
//CALCULO PORCENTAJES//
let pc = mc*100/mt;
let pd = md*100/mt;

   porcentaje(pc, pd);

function porcentaje(a, b){
    return alert("El porcentaje de MC y MD es:" + " " + (a) + " " + "y" + " "+ (b));
}