/**
 * ejercicio 1
 */

 function calcular() {
      let personas = parseInt(document.getElementById("personas").value);
      let resultado = document.getElementById("resultado");

      if (isNaN(personas) || personas <= 0) {
        resultado.textContent = "Ingrese un número válido";
        return;
      }

      let costoPorPlato;

      if (personas <= 200) {
        costoPorPlato = 25000;
      } else if (personas <= 300) {
        costoPorPlato = 18500;
      } else {
        costoPorPlato = 16000;
      }

      let total = personas * costoPorPlato;

      resultado.textContent = "Total a pagar: $" + total;
    }
