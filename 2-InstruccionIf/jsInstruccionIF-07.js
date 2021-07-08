function mostrar()
{
	/*
	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
	 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

	*/
	let edad;
	let estado;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estado = estadoCivil.value;

if (edad <= 17 && estado == "Casado" ) {

	{
		alert (" Es muy pequeño para NO ser soltero ");
	}
}
	else if( edad <= 17 && estado == "Divorciado")
	{
		
		alert ( "Es muy pequeño para NO ser soltero ");
	}

	else
	{

		txtIdEdad.value = ("");
		
	}
	


}//FIN DE LA FUNCIÓN