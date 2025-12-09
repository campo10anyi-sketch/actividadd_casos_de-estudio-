/**
 * ejercicio 9
 */

function evaluarLlantas() {
            const tipo = document.getElementById("tipo").value;
            const grosor = Number(document.getElementById("grosor").value);
            const diametro = Number(document.getElementById("diametro").value);
            const marca = document.getElementById("marca").value;

            let mensajeA = "";
            let mensajeB = "";

            // -------------------------
            // PARTE A
            // -------------------------
            if (diametro > 1.4) {
                mensajeA = "La rueda es para un vehículo grande.";
            } 
            else if (diametro <= 1.4 && diametro > 0.8) {
                mensajeA = "La rueda es para un vehículo mediano.";
            } 
            else {
                mensajeA = "La rueda es para un vehículo pequeño.";
            }

            // -------------------------
            // PARTE B
            // -------------------------
            if (diametro > 1.4 && grosor < 0.4) {
                mensajeB = "El grosor para esta rueda es inferior al recomendado.";
            } 
            else if (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
                mensajeB = "El grosor para esta rueda es inferior al recomendado.";
            }

            // Salida final
            let salida = `<p><strong>Parte A:</strong> ${mensajeA}</p>`;

            if (mensajeB !== "") {
                salida += `<p><strong>Parte B:</strong> ${mensajeB}</p>`;
            } else {
                salida += `<p><strong>Parte B:</strong> No presenta problemas.</p>`;
            }

            document.getElementById("resultado").innerHTML = salida;
        }