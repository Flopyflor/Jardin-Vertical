function checkForm() {
    let valid = true;
    if (document.getElementById("nombre").value === "") {
        document.getElementById("warning-nombre").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("warning-nombre").style.visibility = "hidden";
    }

    let fecha = new Date(document.getElementById("edad").value);
    if (fecha > Date.now()) {
        document.getElementById("warning-edad").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("warning-edad").style.visibility = "hidden";
    }

    if (valid) {
        alert("gracias por completar el formulario!");
    }
    return false;
}