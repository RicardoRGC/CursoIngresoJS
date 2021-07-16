function mostrar() {
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
	*/
	//Genero el número RANDOM entre 1 y 10 



	let nota
	let maximo
	let minimo
	nota = Math.floor(Math.random() * 11);

	if (nota == 9 || nota == 10) {
		alert("EXELENTE " + nota);
	}
	else {
		if (nota < 9 && nota > 3) {
			alert("APROBÓ " + nota);
		}
		else {
			alert("Vamos, la proxima se puede " + nota)
		}
	}





}//FIN DE LA FUNCIÓN