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



//Reto Triángulo isósceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}



// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = parseInt(input.value);

    const perimetro = perimetroCuadado(value);
    alert(perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = parseInt(input.value);

    const area = areaCuadado(value);
    alert(area + " cm2");  
}


function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("input-triangulo-1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("input-triangulo-2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("input-triangulo-3");
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro + " cm");
}

function calcularAreaTriangulo() {
    const input4 = document.getElementById("input-triangulo-4");
    const value4 = parseInt(input4.value);
    const input5 = document.getElementById("input-triangulo-5");
    const value5 = parseInt(input5.value);

    const area = areaTriangulo(value4, value5);
    alert(area + " cm2");  
}


function calcularPerimetroCirculo() {
    const input = document.getElementById("input-circulo");
    const value = parseInt(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro + " cm");
}

function calcularAreaCirculo() {
    const input = document.getElementById("input-circulo");
    const value = parseInt(input.value);

    const area = areaCirculo(value);
    alert(area + " cm2");  
}



function calcularAlturaTrianguloIsosceles() {
    const input6 = document.getElementById("input-triangulo-6");
    const value6 = parseInt(input6.value);
    const input7 = document.getElementById("input-triangulo-7");
    const value7 = parseInt(input7.value);
    const input8 = document.getElementById("input-triangulo-8");
    const value8 = parseInt(input8.value);

    const altura = alturaTrianguloIsosceles(value6, value7, value8);
    alert(altura + " cm");
}