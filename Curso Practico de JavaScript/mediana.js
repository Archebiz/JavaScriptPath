const lista1=[
    100,
    200,
    300,
    500
];


function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
};
function calcularMediana(lista){
    lista=lista.sort(function(a,b){
        return a-b
    });
    const mitadLista1= parseInt(lista1.length/2);
    let mediana;
    if (esPar(lista.length)){
        const elemento1=lista[mitadLista1];
        const elemento2=lista[mitadLista1-1];
        const promedio1y2=calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
        return promedio1y2;
    }else{
        mediana= lista[mitadLista1];
        return mediana;
    }
}
function calcularMediaAritmetica(lista){
    // let sumaLista1=0;
    // for(let i=0;i<lista.length;i++){
    //     sumaLista1+=lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista1=sumaLista/lista.length;
    return promedioLista1;
}
