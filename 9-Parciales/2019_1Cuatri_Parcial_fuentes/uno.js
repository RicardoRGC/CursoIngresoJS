/*Gonzalez Ricardo P1
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt 
y que muestre el perímetro por alert.
*/
function mostrar()
{
    let ladouno;
    let ladodos;
    let ladotres;
    let calculo;

    alert("perimetro de un triangulo equilatero")

    ladouno = prompt("ingresa medida");
    ladouno = parseInt (ladouno);

    ladodos = prompt("ingresa medida");
    ladodos = parseInt (ladodos);

    ladotres = prompt("ingresa medida");
    ladotres = parseInt (ladotres);


    calculo = ladouno + ladodos + ladotres ;

    alert ("perimetro de triangulo : "+ calculo);







}
