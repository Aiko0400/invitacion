const contenedor = document.querySelector("#AbrirContenedor");
const btnCerrar = document.querySelector("#Cerrar");

// abrir carta
function abrirCarta() {
  const ElementoSuperior = document.querySelector(".superior");
  const ElementoMensaje = document.querySelector(".mensaje");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");

  // animación de apertura
  ElementoSuperior.classList.add("abrir-superior");
  h1.classList.add("borroso");
  p.classList.add("borroso");
  ElementoSuperior.classList.add("borroso"); // sobre borroso

  setTimeout(() => {
    ElementoSuperior.style.zIndex = 0; // sobre pasa atrás
    ElementoMensaje.classList.add("desdoblada"); // carta se centra y agranda
    btnCerrar.style.display = "block"; //mostrat boton cerrar
  }, 700);
}

// cerrar carta
function cerrarCarta() {
  const ElementoSuperior = document.querySelector(".superior");
  const ElementoMensaje = document.querySelector(".mensaje");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const btnCerrar = document.querySelector("#Cerrar")

  // animación de cierre
  ElementoMensaje.classList.remove("desdoblada"); // carta regresa a su tamaño
  ElementoMensaje.classList.add("cerrando"); // animacion inversa
  btnCerrar.classList.add("shrink"); // boton se hace pequeño
  
  h1.classList.remove("borroso");
  p.classList.remove("borroso");
  ElementoSuperior.classList.remove("borroso");

  setTimeout(() => {
    ElementoSuperior.style.zIndex = 1; // sobre vuelve al frente
    ElementoSuperior.classList.remove("abrir-superior");
    ElementoMensaje.style.zIndex = -1; // carta vuelve atrás
    ElementoMensaje.classList.remove("cerrando");
    btnCerrar.style.display = "none"; // ocultar boton cerrar
    btnCerrar.classList.remove("shrink");
  }, 800);
}

// eventos: click en el sobre solo abre
contenedor.addEventListener("click", abrirCarta);

//evento: boton cerrar
btnCerrar.addEventListener("click", cerrarCarta);