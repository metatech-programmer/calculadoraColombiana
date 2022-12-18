//Hallar el cuatro por mil

const cuatroPorMil = (valor) => (valor / 1000) * 4;


function calcularcuatroPorMil() {
    let valor = document.getElementById('valor');
    let value = parseFloat(valor.value);

    const result = `El valor que debera pagar adiconal por utilizar $ ${valor.value} pesos es: \n $ ${cuatroPorMil(value)} pesos.`;
    document.getElementById('resultado').innerText = result;
}
