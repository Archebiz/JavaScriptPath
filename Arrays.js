var frutas =["Manzana","Platano","Cereza","Fresa"];

console.log(frutas);

//longitud
var n=frutas.length;
//elementos acceso
var elemento = frutas[1]; //indices de 0 a n-1
//agregar elementos
frutas.push('Uvas');
//quitar el ultimo elemento
frutas.pop();
//Agregar adelante:
frutas.unshift('Uva');
//Quitar el primer elemento;
frutas.shift();
//Indice del elemento:
frutas.indexOf('Manzana');
