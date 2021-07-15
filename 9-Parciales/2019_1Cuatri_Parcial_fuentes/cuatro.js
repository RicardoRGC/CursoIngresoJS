/*
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10"
*/



function mostrar() {


    let numUno;
    let numDos;
    let resta;


    numUno = prompt("ingrese numero 1");
    numUno = parseInt(numUno);

    numDos = prompt("ingrese numero 1");
    numDos = parseInt(numDos);

    resta = numUno - numDos ;

    if (numUno == numDos)
    {
        alert(""+numDos+numUno);
    }
    else{
        if(numUno>numDos && resta>10){

            alert("la resta es: "+resta+"y supero el 10");
           

            }
            
            else{
                let suma;
                suma = numDos+numDos;
            }
    }

   
    


}
