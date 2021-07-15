/*
Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/


function mostrar() {
    let importe;
    let descuento;
    let preciofinal;
    let porcentaje;

    importe = prompt("importe");
    importe = parseInt(importe);
    descuento = prompt("porcentaje del descuento");
    descuento = parseInt(descuento);

    porcentaje = (importe * descuento) / 100;

    preciofinal = importe - porcentaje;

    elPrecioFinal.value = (preciofinal);



}
