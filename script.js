const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre1 = document.querySelector("#nombre");
const mail2 = document.querySelector("#email");
const Mensaje3 = document.querySelector("#mensaje");

nombre1.addEventListener("input", leer)
mail2.addEventListener("input", leer)
Mensaje3.addEventListener("input", leer)

const btEnviar = document.querySelector(".formulario");

btEnviar.addEventListener("submit", function(e){
    e.preventDefault();

    const {nombre, email, mensaje} = datos;

    if(nombre === "" || email === "" || mensaje === ""){
        Alerta("Todos los campos deben ser completados", true)

        return;
    }
        Alerta("Se ha enviado correctamente")
});

function leer(e){
    datos [e.target.id] = e.target.value

    console.log(datos);
};

function Alerta(mensaje, error = null){
    const alert = document.createElement("P")
    console.log(alert)

    alert.textContent = mensaje;
    console.log(mensaje)

    if (error){
        alert.classList.add("error")
    }
    else{
        alert.classList.add("con")
    }

    btEnviar.appendChild(alert);

    setTimeout (() => {
        alert.remove();
    }, 2000); 
}