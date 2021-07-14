/*
GONZALEZ RICARDO
TP1
*/


/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let productouno;
    let productodos;
    let productotres;
    let resultado;

    productouno = txtIdPrecioUno.value;

    productouno = parseInt(productouno);

    productodos = txtIdPrecioDos.value;

    productodos = parseInt(productodos);

    productotres = txtIdPrecioTres.value;

    productotres = parseInt(productotres);


resultado = productouno + productodos + productotres;

alert(resultado)
    


	
}
function Promedio () 
{
    
    let productouno;
    let productodos;
    let productotres;
    let resultado;
    let promedio;

    productouno = txtIdPrecioUno.value;

    productouno = parseInt(productouno);

    productodos = txtIdPrecioDos.value;

    productodos = parseInt(productodos);

    productotres = txtIdPrecioTres.value;

    productotres = parseInt(productotres);


    resultado = productouno + productodos + productotres;

    promedio = resultado / 3;



    alert(promedio);
    
	
}
function PrecioFinal () 
{
    
    let productouno;
    let productodos;
    let productotres;
    let resultado;
    let iva;
    let preciofinal;

    productouno = txtIdPrecioUno.value;

    productouno = parseInt(productouno);

    productodos = txtIdPrecioDos.value;

    productodos = parseInt(productodos);

    productotres = txtIdPrecioTres.value;

    productotres = parseInt(productotres);


resultado = productouno + productodos + productotres;

    iva = (resultado*21)/100 ;

    preciofinal = iva + resultado;


alert(preciofinal);
    


	
}