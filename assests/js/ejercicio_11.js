/**
 * ejercicio 11
 */
function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);

    if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
        alert("Por favor ingrese valores válidos.");
        return;
    }

    let imc = peso / (estatura * estatura);
    let diagnostico = "";

    if (imc < 16) {
        diagnostico = "Criterio de ingreso en hospital";
    } else if (imc >= 16 && imc < 17) {
        diagnostico = "Infrapeso";
    } else if (imc >= 17 && imc < 18.5) {
        diagnostico = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        diagnostico = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        diagnostico = "Sobrepeso (Obesidad de grado I)";
    } else if (imc >= 30 && imc < 35) {
        diagnostico = "Obesidad crónica (Obesidad de grado II)";
    } else if (imc >= 35 && imc < 40) {
        diagnostico = "Obesidad crónica (Obesidad de grado III)";
    } else {
        diagnostico = "Obesidad mórbida (Obesidad de grado IV)";
    }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML = 
        "IMC: " + imc.toFixed(2) + "<br>" +
        "Diagnóstico: " + diagnostico;
}