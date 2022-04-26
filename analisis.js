// Helpers o utils
function esPar(numerito) {
    // if(numerito % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana general
const salariosColombia = colombia.map(
    function(personita) {
        return personita.salary;
    }
);

const salariosColombiaSorted = salariosColombia.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralColombia = medianaSalarios(salariosColombiaSorted);

// Mediana del top 10% de salarios
const spliceStart = (salariosColombiaSorted.length * (100 - 10)) / 100;
const spliceCount = salariosColombiaSorted.length - spliceStart;

const salariosTop10 = salariosColombiaSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Colombia = medianaSalarios(salariosTop10);


console.log({
    medianaGeneralColombia,
    medianaTop10Colombia,
});