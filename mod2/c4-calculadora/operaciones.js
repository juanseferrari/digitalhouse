//sumar
function sumar(numeroA, numeroB) {
    let resultado = numeroA + numeroB;
    return resultado
}
//restar
function restar(numeroA, numeroB) {
    let resultado = numeroA - numeroB;
    return resultado
}
//multiplicar
function multiplicar(numeroA, numeroB) {
    let resultado = numeroA * numeroB;
    return resultado
}
//dividir
function dividir(numeroA, numeroB) {
    let resultado = numeroA / numeroB;
    return resultado
}

module.exports = {
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar,
    dividir: dividir
}

