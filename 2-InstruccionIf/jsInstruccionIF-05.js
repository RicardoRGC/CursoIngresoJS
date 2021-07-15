//gonzalez ricardo if-05 
//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	//tomo la edad  
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

/*if (edad > 12 && edad <18) {

	{
		txtIdEdad.value = ("");
		
	}
}
	else {
		
		alert (" no es adolescente ");
	}
	*/

if (edad <12 || edad > 17){

	alert ("no es adolescente")
}
else 
	{
		txtIdEdad.value = ("");
	}








}//FIN DE LA FUNCIÓN