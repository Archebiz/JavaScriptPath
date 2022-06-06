//objetos se crean como variables, tienen propiedades y metodos creados por las funciones.
var objeto ={
    marca: "Toyota",
    modelo:"Corolla",
    annio:2020,
    detalleDelAuto:function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
//Funcion constructora de objetos

function auto(marca,modelo,annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
}

var autoNuevo=new auto("Tesla","Model 3",2020);
var autoNuevo2= new auto("Tesla","Model X",2018);
var autoNuevo3= new auto("Toyota","Model Corolla",2019);
