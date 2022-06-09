// Código del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado+"cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado miden: " + perimetroCuadrado+"cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado miden: " + areaCuadrado+"cm^2");
console.groupEnd();
// Código del triángulo

console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm");
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es "+ alturaTriangulo +" cm")

const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo
console.log("El perímetro del triángulo es: " + perimetroTriangulo);

const areaTriangulo=(baseTriangulo* alturaTriangulo)/2;

console.log("El área del triángulo es: " + areaTriangulo + "cm^2")


console.groupEnd();

// Código del Círculo

console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del Círculo mide: " + radioCirculo+"cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El Diámetro del Círculo mide: " + diametroCirculo+"cm");

//PI
const PI=Math.PI;
console.log("El valor de PI es: " + PI);

//Circuferencia
const perimetroCirculo= diametroCirculo * PI;
console.log("El perímetro del Círculo mide: " + perimetroCirculo+"cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del Círculo mide: " + areaCirculo+"cm^2");


console.groupEnd();