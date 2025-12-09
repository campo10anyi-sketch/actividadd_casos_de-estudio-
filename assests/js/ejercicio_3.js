/**
 * ejercicio 3 
 */

function calcular() {
      let cantidad = parseInt(document.getElementById("cantidad").value);
      let tipo = document.getElementById("tipo").value;
      let pago = document.getElementById("pago").value;
      let detalle = document.getElementById("detalle");
        }
      if (isNaN(cantidad) || cantidad <= 0) {
        detalle.textContent = "Ingrese un número válido de hamburguesas.";
        return;
       }

      let precioUnitario = 0;

      if (tipo === "sencilla") {
        precioUnitario = 20000;
      } else if (tipo === "doble") {
        precioUnitario = 25000;
      } else {
        precioUnitario = 28000;
      }

      let totalSinCargo = precioUnitario * cantidad;
      let cargo = 0;

      if (pago === "tarjeta") {
        cargo = totalSinCargo * 0.07;
      }

      let totalPagar = totalSinCargo + cargo;

        detalle.innerHTML =` 
        Precio Unit.: $${precioUnitario}<br>
        Cantidad: ${cantidad}<br>
        Tipo de pago: ${pago.charAt(0).toUpperCase() + pago.slice(1)}<br>
        Total sin cargo: $${totalSinCargo}<br>
        El cargo es: $${cargo}<br>
        Total a pagar es: $${totalPagar};
    }



