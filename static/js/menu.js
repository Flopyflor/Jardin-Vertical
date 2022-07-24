// funcion para activar el menu
function menu() {
    document.getElementById("nav").style.display = "flex";
    document.getElementById("nav").style.top = "0px";
    setTimeout(() => {
        document.getElementById("nav").style.height = "100vh";
        document.getElementById("exit-menu").style.top = "20px";
    }, 1)
}

// funcion para sacar el menu
function exitMenu() {
    document.getElementById("nav").style.height = "0vh";
    document.getElementById("nav").style.top = "-10px";
    document.getElementById("exit-menu").style.top = "-50px";
    setTimeout(() => {
        document.getElementById("nav").style.display = "none";
    }, 490)
}