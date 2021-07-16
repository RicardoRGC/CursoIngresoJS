/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantidad;
    let marca;
    let precio;
    let porcentaje;
    let preciofinal;
    let precioDes;
    let iibb;
    let impuesto;

    
    marca = Marca.value;
    cantidad = txtIdCantidad.value;
    cantidad = parseInt(cantidad);
    precio = cantidad * 35;
    //A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.   
    if (cantidad > 5) {

        porcentaje = 50;
    }
    else {
        if (cantidad == 5)//B
        {
            if (marca == "ArgentinaLuz") {
                porcentaje = 40;
            }
            else {
                porcentaje = 30;
            }
        }
        else {
            if (cantidad == 4)//C
            {
               if(marca == "ArgentinaLuz")
               {
                   porcentaje = 25;
               }
               else
               {
                   if(marca == "FelipeLamparas" )//C
                   {
                    porcentaje = 25;
                   }
                   else
                   {
                    porcentaje = 20;
                   }

               }
    
            }else //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
             {
                if(cantidad == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentaje = 15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentaje = 10;
                        }
                        else
                        {
                            porcentaje = 5;
                        }
                    }


                }else//
                   {
                    porcentaje=0;
                   }
                

             }
        }
            


            
        
    }


    precioDes = (precio * porcentaje) / 100;
    preciofinal = precio - precioDes;
    txtIdprecioDescuento.value = preciofinal;
    impuesto = (precio * 10) / 100;
    iibb = impuesto+preciofinal;
    


//E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
//”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    if(preciofinal > 120)
    {
        txtIdprecioDescuento.value = iibb;
        alert("”Usted pago "+ iibb +" de IIBB.”, siendo "+ impuesto+" el impuesto que se pagó. ")

    }
 

}













