/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let centigrados;
    let calculo;

    //let prueva = 8/2;

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    calculo = (temperatura - 32);

    centigrados =  calculo /1.8;


    alert( temperatura + " Fahrenheit son : "+ centigrados + " centigrados ");



	
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let Fahrenheit;
    let calculo;
    
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);
    
    calculo = (temperatura + 32);

    Fahrenheit = calculo * 1.8;

    alert ( temperatura + " centigrados son " + Fahrenheit +" Fahrenheit " );




	
}
