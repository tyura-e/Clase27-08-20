let espacioNum1 = document.getElementById('num1')
let espacioNum2 = document.getElementById('num2')
let resultadoOperacion = document.getElementById('mensaje')

function operacion(dato) {
    switch (dato) {
        case "suma":
            resultadoOperacion.textContent = espacioNum1.valueAsNumber + espacioNum2.valueAsNumber
            break;

        case "resta":
            resultadoOperacion.textContent = espacioNum1.valueAsNumber - espacioNum2.valueAsNumber
            break;

        case "multiplicacion":
            resultadoOperacion.textContent = espacioNum1.valueAsNumber * espacioNum2.valueAsNumber
            break;

        default:
            resultadoOperacion.textContent = espacioNum1.valueAsNumber / espacioNum2.valueAsNumber
            break;

    }
}