// SIMULADOR DE PRESTAMOS ==================================================================

console.log("Bienvenido/a a PrestaFACIL");

//FUNCIONES ================================================================================

function interes(monto , cuotas){
    let interes;

    if(cuotas == 3){
        interes = monto * 0.08;
        return interes
    }

    else if(cuotas == 6){
        interes = monto * 0.14;
        return interes
    }

    else if(cuotas == 9){
        interes = monto * 0.30;
        return interes
    }

    else if(cuotas == 12){
        interes = monto * 0.65;
        return interes
    }

    else{
        return false
    }
}

//CICLO =================================================================================

let monto = "";

while(monto != "FIN"){

    monto = prompt("Ingrese monto - FIN para salir");

    //CONDICIONAL =======================================================================

    if(monto != "FIN"){

        monto = parseFloat (prompt("Ingrese monto - FIN para salir"));
        let cuotas = parseInt ( prompt("Elija cantidad de cuotas 3-6-9-12"));
        console.log("Ingresaste: ", monto ,"$");
        console.log("En",cuotas ,"cuotas");
        console.log("Valor de cuota por mes: ",(monto + interes(monto, cuotas))/cuotas);
        console.log("Saldo a devolver: ",monto + interes(monto, cuotas));
    }
}
