var articulos=[
    {nombre:"Bici",costo:3000},
    {nombre:"Televisión",costo:2500},
    {nombre:"Libro",costo:320},
    {nombre:"Celular",costo:2000},
    {nombre:"Laptop",coto:1000},
    {nombre:"Teclado",costo:800},
    {nombre:"Audifionos",costo:600}
]

//Definimos primro un array de articulos que contiene objetos

//Creamos un filtro

var articulosFiltrados=articulos.filter(function(articulo){
    return articulo.costo<=500
});


//metodo Map

var nombreArticulos=articulos.map(function(articulo){
    return articulo.nombre
})


//metodo find 
var encuentraArticulo=articulos.find(function(articulo){
    return articulo.nombre === 'Laptop'
})

//metodo for each

articulos.forEach(function(articulo){
    console.log(articulo.costo);
})


//metodo some

var articulosBaratos=articulos.some(function(articulo){
    return articulo.costo <= 900;
})