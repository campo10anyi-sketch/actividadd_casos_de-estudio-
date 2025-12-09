/**
 * ejercicio 7 
 */

function calcularSalario(){
    let horas = parseInt(document.getElementById("horas").value);
    let tarifa = parseInt(document.getElementById("tarifa").value);

    if(isNaN(horas) || isNaN(tarifa)){
        alert("Por favor ingrese valores válidos.");
        return;
    }

    let salario = 0;

    if(horas <= 40){
        salario = horas * tarifa;
    } else {
        let horasExtra = horas - 40;
        let tarifaExtra = tarifa * 1.5;
        salario = (40 * tarifa) + (horasExtra * tarifaExtra);
    }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML =
        "Salario del trabajador es: $ " + salario.toLocaleString();
}