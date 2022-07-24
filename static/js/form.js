function checkForm() {
    let valid = true;
    if (document.getElementById("nombre").value === "") {
        document.getElementById("warning-nombre").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("warning-nombre").style.display = "none";
    }

    let fecha = new Date(document.getElementById("edad").value);
    if (fecha > Date.now()) {
        document.getElementById("warning-edad").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("warning-edad").style.display = "none";
    }

    if (valid) {
        alert("Gracias por completar el formulario!");
    } else {
        alert("Por favor revisar los datos.")
    }
    return false;
}