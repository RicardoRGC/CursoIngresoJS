/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	numero1 = txtIdNumeroUno.value
	numero1 =parseInt(numero1);
	
	numero2 = txtIdNumeroDos.value
	numero2 = parseInt(numero2);
	
	
	resultado = numero1 + numero2;

	

     alert("la suma es: "+ resultado);	
}

function restar()
{
	
	numero1 = txtIdNumeroUno.value
	numero1 =parseInt(numero1);
	
	numero2 = txtIdNumeroDos.value
	numero2 = parseInt(numero2);
	
	
	resultado = numero1 - numero2;

	

     alert("la resta es: "+ resultado);
}

function multiplicar()
{ 
	
	numero1 = txtIdNumeroUno.value
	numero1 =parseInt(numero1);
	
	numero2 = txtIdNumeroDos.value
	numero2 = parseInt(numero2);
	
	
	resultado = numero1 * numero2;

	

     alert("la multiplicacion es: "+ resultado);
}

function dividir()
{
	
	numero1 = txtIdNumeroUno.value
	numero1 =parseInt(numero1);
	
	numero2 = txtIdNumeroDos.value
	numero2 = parseInt(numero2);
	
	
	resultado = numero1 + numero2;

	

     alert("la division es: "+ resultado);
}

