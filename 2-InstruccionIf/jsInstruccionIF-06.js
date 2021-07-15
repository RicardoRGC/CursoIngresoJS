//gonzalez ricardo if-06
//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar()
{
	//tomo la edad  
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad)

if (edad < 13 ) 

	{
		alert (" es menor")
	}

else
{

	if( edad > 17)
	{
		
		alert ( "es mayor de edad ")
	}



	else
	    {
		alert("es adolescente")
	    }

}

}//FIN DE LA FUNCIÓN