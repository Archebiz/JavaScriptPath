//Condicionales
var edad=18;
if (edad>18){
    console.log("Puede votar")
}else if(edad===18){
    console.log("primera vez q ha votado")
}
else{
    console.log("No puede votar")
}

//condiciones IIF syntaxis
condicion ? true:false;


//Piedra papel o tijera
var Opciones=["Piedra","Papel","Tijera"]
var OpcionesDebilidad=["Papel","Tijera","Piedra"]
function juegoYanKenPo(Mano1,Mano2){
    if (Opciones.findIndex(Mano => Mano==Mano2)==OpcionesDebilidad.findIndex(Mano => Mano==Mano1)){
        console.log("Gano Mano1")   
    }else if(Opciones.findIndex(Mano => Mano==Mano1)==OpcionesDebilidad.findIndex(Mano => Mano==Mano2)){
        console.log("Gano Mano2")
    }else if(Opciones.findIndex(Mano => Mano==Mano1)==-1 || Opciones.findIndex(Mano => Mano==Mano2)==-1){
        console.log("Uno de los jugadores uso una seña incorrecta")
    }else{
        console.log("Es un empate")
    }
}