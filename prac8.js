let h = prompt("Ingrese cantidad de Hombres",);
let m = prompt("Ingrese cantidad de Mujeres",);
let ct = Number(h) + Number(m);
 porcentaje(h,m);


function porcentaje(h,m){
   let ph = h*100/ct;
   let pm = m*100/ct;
    return alert("El porcentaje total de Mujeres es: " + Math.round(pm) + "% y " + "El porcentaje total de Hombres es: " + Math.round(ph) + "%");
}