function mostrar()
{
	//tomo la edad  
	/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
	*/
	let edad;
	let estado;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estado = estadoCivil.value;

if (edad <= 17 && estado == "Casado" ) {

	{
		txtIdEdad.value = ("");
	}
}
	else if( edad <= 17 && estado == "Divorciado")
	{
		
		txtIdEdad.value = ("");
	}
	else if( edad >= 18 && estado == "Soltero"){

		alert("Es soltero y no es menor")
	}

	else
	{

		txtIdEdad.value = ("");
		
	}
	
	


}//FIN DE LA FUNCIÓN