/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;

	importe = txtIdImporte.value;

	importe = parseInt(importe);

	resultado = importe - (importe*25)/100;


	txtIdResultado.value = (resultado);
}
