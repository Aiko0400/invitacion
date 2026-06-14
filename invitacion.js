const contenedor = document.querySelector("#AbrirContenedor");
const btnCerrar = document.querySelector("#Cerrar");
const sello = document.querySelector(".sello");

function abrirCarta() {
  const ElementoSuperior = document.querySelector(".superior");
  const ElementoMensaje  = document.querySelector(".mensaje");
  const h1        = document.querySelector("h1");
  const psorpresa = document.querySelector(".psorpresa");
  const carta     = document.querySelector(".carta");
  const selloEl   = document.querySelector(".sello");

  // 👇 Reinicia el scroll a la primera hoja
  ElementoMensaje.scrollTop = 0;

  ElementoSuperior.classList.add("abrir-superior");

  h1.classList.add("borroso");
  psorpresa.classList.add("borroso");
  carta.classList.add("borroso");
  selloEl.classList.add("borroso");
  ElementoSuperior.classList.add("borroso");

  setTimeout(() => {
    ElementoSuperior.style.zIndex = 0;
    ElementoMensaje.classList.add("desdoblada");

    // 👇 Lo forzamos otra vez por si scroll-snap reposiciona al mostrar
    ElementoMensaje.scrollTop = 0;
  }, 700);
}

function cerrarCarta() {
  const ElementoSuperior = document.querySelector(".superior");
  const ElementoMensaje  = document.querySelector(".mensaje");
  const h1        = document.querySelector("h1");
  const psorpresa = document.querySelector(".psorpresa");
  const carta     = document.querySelector(".carta");
  const selloEl   = document.querySelector(".sello");

  ElementoMensaje.classList.remove("desdoblada");
  ElementoMensaje.classList.add("cerrando");

  setTimeout(() => {
    ElementoMensaje.classList.remove("cerrando");

    // 👇 Tambien lo regresamos al inicio para la proxima vez que se abra
    ElementoMensaje.scrollTop = 0;

    h1.classList.remove("borroso");
    psorpresa.classList.remove("borroso");
    carta.classList.remove("borroso");
    selloEl.classList.remove("borroso");
    ElementoSuperior.classList.remove("borroso");

    ElementoSuperior.style.zIndex = 1;
    ElementoSuperior.classList.remove("abrir-superior");
  }, 800);
}

sello.addEventListener("click", function () {
  const mensaje = document.querySelector(".mensaje");
  if (!mensaje.classList.contains("desdoblada")) {
    abrirCarta();
  }
});

btnCerrar.addEventListener("click", function (e) {
  e.stopPropagation();
  cerrarCarta();
});
