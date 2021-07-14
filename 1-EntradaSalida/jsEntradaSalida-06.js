/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	
	numeroUno = document.getElementById("txtIdNumeroUno").value
	numeroUno =parseInt(numero1);
	
	numeroDos = txtIdNumeroDos.value
	numeroDos = parseInt(numeroDos);
	
	
	resultado = numeroUno + numeroDos;

	

     alert("la suma es: "+ resultado);
}//nombre = document.getElementById("txtIdNumeroUno").value
