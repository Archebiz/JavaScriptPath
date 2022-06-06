//Cohercion implica conversion implicita o explicita de tipos de dato
//Implicita
//String+numero
var a=20+""
a;
console.log(typeof a)
//string*numero
var a=20*'3'
a;
console.log(typeof a)

var b=20*'a'
b;
console.log(typeof b)

//Conversion explicita

var c=Number(a);
console.log(typeof c);
var d=String(c);
console.log(typeof d)

//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también