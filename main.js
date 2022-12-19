
/**
 * Función que convierte un número a su representación
 * monetaria en JavaScript, por ejemplo, el número
 * 123456 se convierte en $ 123, 456.00
*/
const aMoneda = (numero, opciones) => {
    // Valores por defecto
    opciones = opciones || {};
    opciones.simbolo = opciones.simbolo || "$";
    opciones.separadorDecimal = opciones.separadorDecimal || ".";
    opciones.separadorMiles = opciones.separadorMiles || ",";
    opciones.numeroDeDecimales = opciones.numeroDeDecimales >= 0 ? opciones.numeroDeDecimales : 2;
    opciones.posicionSimbolo = opciones.posicionSimbolo || "i";
    const CIFRAS_MILES = 3;

    // Redondear y convertir a cadena
    let numeroComoCadena = numero.toFixed(opciones.numeroDeDecimales);

    // Comenzar desde la izquierda del separador o desde el final de la cadena si no se proporciona
    let posicionDelSeparador = numeroComoCadena.indexOf(opciones.separadorDecimal);
    if (posicionDelSeparador === -1) posicionDelSeparador = numeroComoCadena.length;
    let formateadoSinDecimales = "", indice = posicionDelSeparador;
    // Ir cortando desde la derecha de 3 en 3, y concatenar en una nueva cadena
    while (indice >= 0) {
        let limiteInferior = indice - CIFRAS_MILES;
        // Agregar separador si cortamos más de 3
        formateadoSinDecimales = (limiteInferior > 0 ? opciones.separadorMiles : "") + numeroComoCadena.substring(limiteInferior, indice) + formateadoSinDecimales;
        indice -= CIFRAS_MILES;
    }
    let formateadoSinSimbolo = `${formateadoSinDecimales}${numeroComoCadena.substr(posicionDelSeparador, opciones.numeroDeDecimales + 1)}`;
    return opciones.posicionSimbolo === "i" ? opciones.simbolo + formateadoSinSimbolo : formateadoSinSimbolo + opciones.simbolo;
};

// Probar
const opcionesPesosColombianos = {
    numeroDeDecimales: 0,
    separadorDecimal: " ",
    separadorMiles: ".",
    simbolo: "$ ", // Con un espacio, ya que la función no agrega espacios
    posicionSimbolo: "i", // i = izquierda, d = derecha
};
//Hallar el cuatro por mil

const cuatroPorMil = (valor) => (valor / 1000) * 4;


function calcularcuatroPorMil() {
    let valor = document.getElementById('valor');
    let value = parseFloat(valor.value);
    let valorTotal = value + (cuatroPorMil(value));

    const result = `El valor que debera pagar adiconal por utilizar ${aMoneda((value), opcionesPesosColombianos)} pesos es: \n ${aMoneda((cuatroPorMil(value)), opcionesPesosColombianos)} pesos.`;
    const total = `Total  ${aMoneda((value), opcionesPesosColombianos)} + ${aMoneda((cuatroPorMil(value)), opcionesPesosColombianos)} : \n ${aMoneda(valorTotal, opcionesPesosColombianos)} pesos.`;
    document.getElementById('total').innerText = total;
    document.getElementById('resultado').innerText = result;
}


const calcPrecioFinal = (precio, porcentaje, cantidad) => (precio + (precio * (porcentaje / 100))) / cantidad;


function calcularPrecio() {
    let precio = document.getElementById('precio');
    let price = parseFloat(precio.value);
    let porcentaje = document.getElementById('porcentaje');
    let porcent = parseFloat(porcentaje.value);
    let cantidad = document.getElementById('cantidad');
    let cant = parseFloat(cantidad.value);

    const result = `El valor final de su producto es: \n ${aMoneda((calcPrecioFinal(price, porcent, cant)), opcionesPesosColombianos)} pesos.`;

    document.getElementById('resultado').innerText = result;
}
function eliminar(id) {
    document.getElementById(id).value = '';

}