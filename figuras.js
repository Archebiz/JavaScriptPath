// Código del Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado+"cm");


function perimetroCuadrado(lado) { 
    return lado * 4;
}
//console.log("El perímetro del cuadrado miden: " + perimetroCuadrado+"cm");

function areaCuadrado(lado){
return  lado * lado;
}
// console.log("El área del cuadrado miden: " + areaCuadrado+"cm^2");
console.groupEnd();
// Código del triángulo

console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm");
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es "+ alturaTriangulo +" cm")

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo);

function areaTriangulo(base,altura){
    return (base * altura)/2
}

function alturaTrianguloIsosceles(ladoA,ladoB,ladoBase){
    var altura;
    if(ladoA==ladoB){
        altura=Math.sqrt(Math.pow(ladoA,2)-(Math.pow(ladoBase/2)))
    }else{
        console.error("Los lados a y b no son iguales");
    }
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2")


console.groupEnd();

// Código del Círculo

console.group("Círculo");

//Radio
//const radioCirculo = 4;
//console.log("El radio del Círculo mide: " + radioCirculo+"cm");

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
//PI
const PI=Math.PI;
console.log("El valor de PI es: " + PI);

//Circuferencia
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio)
    return diametro * PI;
}
//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();



//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado miden: " + perimetro+"cm"); 
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El Área del cuadrado miden: " + area+"cm^2"); 
}
