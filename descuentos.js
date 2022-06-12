var cupones=["CUPON10","CUPON20"]

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function descuentoCuponera(precio,cupon){
    switch(cupon){
        case cupones[0]:
            return calcularPrecioConDescuento(precio,10);            
        case cupones[1]:
            return calcularPrecioConDescuento(precio,20);
        default:
            return "Cupon no Existe"
    }    
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

function onClickButtonCuponDiscount(){
    const inputPrice= document.getElementById("InputPrice");
    const priceValue=inputPrice.value;
    const inputCupon= document.getElementById("InputCupon");
    const Cupon =inputCupon.value;
    const precioConDescuento=descuentoCuponera(priceValue,Cupon)
    const ResultPbyCupon=document.getElementById("ResultPbyCupon");
    ResultPbyCupon.innerText="El precio con descuento son:"+precioConDescuento+ "$"

}