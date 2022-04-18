// Código del cuadrado
// console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadado + " cm");

function areaCuadado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadado + " cm2");

// console.groupEnd();



// Código del triángulo
// console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm y " + baseTriangulo + " cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
// console.log("El área del triángulo es: " + areaTriangulo + " cm2");

// console.groupEnd();



// Código del círculo
// console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo mide: " + radioCirculo + " cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diámetro del círculo mide: " + diametroCirculo + " cm");

// PI
const PI = Math.PI;
// console.log("El valor de PI es: " + PI)

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El área del círculo es: " + areaCirculo + " cm2");

// console.groupEnd();



// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadado(value);
    alert(perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const area = areaCuadado(value);
    alert(area + " cm2");  
}