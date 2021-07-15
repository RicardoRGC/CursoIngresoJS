/*
Gonzalez Ricardo P2
Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos,
 que sumados son xx kilos y el promedio de peso xx ".
*/



function mostrar()
{

    let parejauno;
    let parejados;
    let pesouno;
    let pesodos;
    let promedio;
    let suma;

    parejauno = prompt("nombre de mujer");
    pesouno = prompt ("peso en kg de la mujer");
    pesouno = parseInt (pesouno);

    parejados = prompt("nombre del hombre");
    pesodos = prompt("peso en kg del hombre");
    pesodos = parseInt(pesodos);

    suma = pesodos + pesouno;

    promedio = suma/2;

    alert ("ustedes se llaman " + parejauno +" y "+ parejados + " pesan " + pesouno +" y "+ pesodos+" kilos "+" que sumados da: "+ suma + " y el promedio de peso es: "+ promedio);



  
}
