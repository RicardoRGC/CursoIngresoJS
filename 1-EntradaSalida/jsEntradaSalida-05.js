/*
GONZALEZ RICARDO
05.JS
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	nombre = txtIdNombre.value;

	edad = txtIdEdad.value;

	alert ("usted se llama "+nombre  + " y tiene "+edad+" años")


txtIdNombre.value = ("");
txtIdEdad.value = ("");

}
//nombre = document.getElementById("").value
