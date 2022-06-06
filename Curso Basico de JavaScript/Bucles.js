var estudiantes=["María","Sergio","Rosa","Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
}
// for clasico
for(var i=0;i<estudiantes.length;i++){
    saludarEstudiantes(estudiantes[i]);
}

//for each in 
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//while
var i=0;
while(i<estudiantes.length){
    saludarEstudiantes(estudiantes[i]);
    i++;
}

while(estudiantes.length>0){
    console.log(estudiantes)
    var estudiante=estudiantes.shift()
    saludarEstudiantes(estudiante)
}
