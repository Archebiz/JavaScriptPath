// const precioOriginal= 120;
// const descuento =18;

// const porcentajePrecioConDescuento=100-descuento;

// const precioConDescuento=porcentajePrecioConDescuento*precioOriginal/100;


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const inputPrice= document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputDiscount= document.getElementById("InputDiscount");
    const DiscountValue =inputDiscount.value;
    const precioConDescuento=calcularPrecioConDescuento(priceValue,DiscountValue)
    const resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento son:"+precioConDescuento+ "$"

}