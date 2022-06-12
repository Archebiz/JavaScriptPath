//Helpers
function esPar(numerito){
    return(numerito % 2===0);
}

const salariosPeru=Peru.map(
    function(personita){
        return personita.Salary;
    }
);

const salariosColSorted= salariosPeru.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB
    }
);
//Calculadora de Media Arimetica
function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista1=sumaLista/lista.length;
    return promedioLista1;
}
//Mediana General
function medianaSalariosPeru(lista){
    const mitad =parseInt(lista.length/20);
    if (esPar(lista.length)){
        const personitaMitad1=lista[mitad];
        const personitaMitad2=lista[mitad-1];
        return calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
    }else{
        const personitaMitad=lista[mitad];
        return personitaMitad
    }
};


const medianaGeneralPeru=medianaSalariosPeru(salariosColSorted)

//Mediana del top10%

const spliceStart=parseInt((salariosColSorted.length*90)/100);
const spliceCount=salariosColSorted.length-spliceStart;
const salariosColTop10=salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Peru=medianaSalariosPeru(salariosColTop10);
console.log({
    medianaGeneralPeru,
    medianaTop10Peru,
}
);