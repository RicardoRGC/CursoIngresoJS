/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let radio;
    let resultado;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    resultado = (ancho*2)+(largo*2);

    alert ( resultado);





}
function Circulo () 
{
    let largo;
    let ancho;
    let radio;
    let resultado;
    let radioalcuadrado;


    radio = txtIdRadio.value;
    radio = parseInt(radio);

    radioalcuadrado = (radio *radio);

    resultado = 3.14 * radioalcuadrado;

    alert (resultado);

	
}
function Materiales () 
{
/*1x1  = 2 cemento + 3 cal




*/
    let largo;
    let ancho;
    let radio;
    let resultado;
    let cemento;
    let cal;
    let materiales;


    cal = 3
    cemento = 1


    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    radio = txtIdRadio.value;
    radio = parseInt(radio);



    resultado = (ancho*2)+(largo*2);

    materiales = (resultado * cemento) + ( resultado + cal);


    alert ( materiales);




   




	
}