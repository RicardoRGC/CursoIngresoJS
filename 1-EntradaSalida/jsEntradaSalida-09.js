/*
GONZALEZ RICARDO
09.JS

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
function mostrarAumento()
{
	let importe;
	let resultado;
	let aumento;

	importe = txtIdSueldo.value;

	importe = parseInt(importe);

	aumento = (importe*10)/100 ;

	resultado = aumento + importe;


	txtIdResultado.value = (resultado);

	//txtIdSueldo.value = ("");
}
*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let aumento;
	let porciento;
	
	porciento = prompt("ingresar el porcentaje");

	importe = txtIdSueldo.value;

	importe = parseInt(importe);

	aumento = (importe*porciento)/100 ;

	resultado = aumento + importe;


	txtIdResultado.value = (resultado);

	//txtIdSueldo.value = ("");
}
