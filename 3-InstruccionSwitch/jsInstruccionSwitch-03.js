/*
Gonzalez Ricardo
Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	let mes;
	mes = txtIdMes.value;
	
	switch (mes) {
		case "Enero":
			alert("Este mes tiene 30 o más días");
			break;
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		case "Marzo":
			alert("Este mes tiene 30 o más días");
			break;
		case "Abril":
			alert("Este mes tiene 30 o más días");
			break;
		case "Mayo":
			alert("Este mes tiene 30 o más días");
			break;
		case "Junio":
			alert("Este mes tiene 30 o más días");
			break;
		case "Julio":
			alert("");
			break;
		case "Agosto":
			alert("");
			break;
		case "Septiembre":
			alert("Este mes tiene 30 o más días");
			break;
		case "Octubre":
			alert("Este mes tiene 30 o más días");
			break;
		case "Noviembre":
			alert("Este mes tiene 30 o más días");
			break;
		case "Diciembre":
			alert("Este mes tiene 30 o más días");
			break;
		

	}
	


}//FIN DE LA FUNCIÓN