/**
 * ejercicio 13
 */

        function clasificarTriangulo() {
            const a = Number(document.getElementById("lado1").value);
            const b = Number(document.getElementById("lado2").value);
            const c = Number(document.getElementById("lado3").value);

            const res = document.getElementById("resultado");

            // Validación de valores
            if (a <= 0 || b <= 0 || c <= 0) {
                res.innerHTML = "¡Valor no válido!";
                return;
            }

            // Validación de existencia del triángulo
            if (a + b <= c || a + c <= b || b + c <= a) {
                res.innerHTML = "¡Valor no válido! No cumple desigualdad triangular.";
                return;
            }

            // Clasificación
            if (a === b && b === c) {
                res.innerHTML = "Es un triángulo equilátero";
            } 
            else if (a === b || a === c || b === c) {
                res.innerHTML = "Es un triángulo isósceles";
            } 
            else {
                res.innerHTML = "Es un triángulo escaleno";
            }
        }