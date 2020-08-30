const mensajeNombre = document.getElementById('mensajeAlertaNombre')
const mensajeApellido = document.getElementById('mensajeAlertaApellido')
const mensajeCorreo = document.getElementById('mensajeAlertaCorreo')
const mensajePassword = document.getElementById('mensajeAlertaPassword')
const mensajeEdad = document.getElementById('mensajeAlertaEdad')
const mensajeTyC = document.getElementById('mensajeAlertaTyC')

function validarFormulario(e) {
    e.preventDefault()
    let inputName = document.getElementById('name')
    console.log(inputName)

    let inputApellido = document.getElementById('apellido')
    console.log(inputApellido)

    let inputCorreo = document.getElementById('correo')
    console.log(inputCorreo)

    let inputPassword = document.getElementById('password')
    console.log(inputPassword)

    let inputEdad = document.getElementById('edad')
    console.log(inputEdad)

    const inputTyC = document.getElementById('inputTyC')
    console.log(inputTyC)

    if (inputName.value == '') {
        mensajeNombre.innerText = "Por favor diligencia el campo de Nombre"
        inputName.classList.add('bgcAlert')
    }

    if (inputApellido.value == '') {
        mensajeApellido.innerText = "Por favor diligencia el campo de Apellido"
        inputApellido.classList.add('bgcAlert')
    }

    if (inputCorreo.value == '') {
        mensajeCorreo.innerText = "Por favor diligencia el campo de Correo"
        inputCorreo.classList.add('bgcAlert')
    }

    if (inputPassword.value == '') {
        mensajePassword.innerText = "Por favor diligencia el campo de Contraseña"
        inputPassword.classList.add('bgcAlert')
    }

    if (inputEdad.value == '') {
        mensajeEdad.innerText = "Por favor diligencia el campo de Edad"
        inputEdad.classList.add('bgcAlert')
    }

    if (inputTyC.checked == false) {
        mensajeTyC.innerText = "Acepta términos y condiciones "
    }
    swal("Error!", "Faltan campos por diligenciar!", "error");

    if (inputName, inputApellido, inputCorreo, inputPassword, inputEdad != "" && inputTyC.checked) {
        swal("Muy Bien!", "Registro exitoso", "success");
        setTimeout(() => {
            window.location = './calculadora.html'
        }, 2000)
    }
}