function mostrarAlerta() {
  alert("¡Gracias por visitar mi página!");
}

function cambiarTitulo() {
  const h1 = document.querySelector("header h1");
  h1.textContent = "¡Título actualizado con JavaScript!";
}

function agregarSeccion() {
  const main = document.querySelector("main");
  const nuevaSeccion = document.createElement("section");
  nuevaSeccion.innerHTML = \`
    <h2>Nueva sección agregada</h2>
    <p>Este contenido fue generado dinámicamente con JavaScript.</p>
  \`;
  main.appendChild(nuevaSeccion);
}

document.addEventListener("DOMContentLoaded", () => {
  const botonExtra = document.createElement("button");
  botonExtra.textContent = "Agregar nueva sección";
  botonExtra.onclick = agregarSeccion;

  const header = document.querySelector("header");
  header.appendChild(document.createElement("br"));
  header.appendChild(botonExtra);

  const botonTitulo = document.createElement("button");
  botonTitulo.textContent = "Cambiar Título";
  botonTitulo.style.marginLeft = "10px";
  botonTitulo.onclick = cambiarTitulo;
  header.appendChild(botonTitulo);
});
