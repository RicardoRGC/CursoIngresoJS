/*
Gonzalez Ricardo sw-01

al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
Curso de ingreso UTN FRA
*/
function mostrar()
{
	//tomo el mes
	let mes =txtIdMes.value;
	
	switch(mes){
		case "Enero":
			alert("que comiences bien el año");
			break;
		case "Marzo":
			alert("a clases");
			break;
		case"julio":	
		alert("se vienen las vacaciones!!");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!");		
	}



}//FIN DE LA FUNCIÓN