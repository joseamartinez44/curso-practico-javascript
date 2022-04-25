function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}



function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}



function calcularMediana(lista) {

    lista.sort(function(a, b) {
        return a - b;
    })
    console.log(lista);

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedio = calcularMediaAritmetica([elemento1, elemento2,]);
        mediana = promedio;
        return mediana;
    } else {
        mediana = lista[mitadLista];
        return mediana;
    }
}


const lista1 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500,];
console.log(calcularMediana(lista1));