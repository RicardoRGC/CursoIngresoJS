/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	
	numeroUno = txtIdNumeroDividendo.value;
	numeroUno =parseInt(numeroUno);
	
	numeroDos = txtIdNumeroDivisor.value;
	numeroDos = parseInt(numeroDos);
	
	
	resultado = numeroUno % numeroDos;

	

     alert("el resto es: "+ resultado);
}
