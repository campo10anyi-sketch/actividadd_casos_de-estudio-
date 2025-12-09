/**
 * ejercicio 5 
 */

 function calcularGanancia(){
    let tipo   = document.getElementById("tipo").value;
    let tamano = parseInt(document.getElementById("tamano").value);
    let precio = parseInt(document.getElementById("precio").value);
    let kilos  = parseInt(document.getElementById("kilos").value);

    if(isNaN(precio) || isNaN(kilos)){
        alert("Por favor ingrese valores válidos.");
        return;
    }

    let ajuste = 0;

    // Reglas del problema
    if(tipo === "P1"){
        ajuste = (tamano === 1) ? 1200 : 830;
    } else { // P2
        ajuste = (tamano === 1) ? -540 : -350;
    }

    let precioFinal = precio + ajuste;
    let ganancia = precioFinal * kilos;

    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML = 
     "La ganancia es: $ " + ganancia.toLocaleString();
}