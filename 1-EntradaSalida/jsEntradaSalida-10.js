/*
GONZALEZ RICARDO
10.JS
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let Descuento;
	let porcentaje;
	 porcentaje = prompt("ingresa porcentaje")

	importe = txtIdImporte.value;

	importe = parseInt(importe);

	Descuento = (importe*porcentaje)/100;

	resultado = importe - Descuento;
	


	txtIdResultado.value = (resultado);
}
