// const precioOriginal = 100;
// const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("input-price");
    const priceValue = parseInt(inputPrice.value);

    const inputDiscount = document.getElementById("input-discount");
    const discountValue = parseInt(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultParagraph = document.getElementById("result-paragraph");
    resultParagraph.innerText = "El precio con descuento es: $" + precioConDescuento;
}


// Se puede usar un objeto para mostrar en consolo varias propiedades de JS con sus respectivas llaves y valores
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })