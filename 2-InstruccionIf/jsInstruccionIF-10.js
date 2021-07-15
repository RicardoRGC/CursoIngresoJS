function mostrar()
{
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
	*/
	//Genero el número RANDOM entre 1 y 10 



	let nombre = 10
	let maximo = 10
	let minimo = 1
	nombre = Math.round(Math.random()*(10-1)+1);
	
	if (nombre == 9)
{
	alert("EXELENTE "+nombre);
}
	
	
else
{
  if(nombre == 10)
  		{
 			alert("EXELENTE " + nombre)
 		}
 	else
	{
		  if (nombre <9 && nombre >3)
	 		{
 				alert("APROBÓ "+ nombre);
 			}
 				else 
				 		{
 							alert("Vamos, la proxima se puede " + nombre)
	}					}
}					




}//FIN DE LA FUNCIÓN