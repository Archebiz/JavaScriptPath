const lista1=[
    1,
    2,
    2,
    4,
    4,
    3,
    3,
    3,
    5,
    6,
    6,
    10
]
const lista1Count ={};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento]+=1;
        }else{
            lista1Count[elemento]=1;
        }
    },
)

const lista1Array=Object.entries(lista1Count).sort(
    function(valorAcumulado,nuevoElemento){
        return valorAcumulado[1]-nuevoElemento[1]
    }
)

const moda=lista1Array[lista1Array.length-1]