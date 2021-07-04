function mostrar()
{
	//tomo la edad  

	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad)

	if(edad => 18)
	{
		alert("mayor de edad")
	}
	else{
		txtIdEdad.value = ("")
	}


}//FIN DE LA FUNCIÓN