/* jquery para inicializar el modal */
$(document).ready(function(){
  // el atributo href le otorga control a quien llamará para aparecer el modal
  $('.modal').modal();
});

/* AGREGAR COMENTARIOS A SECCIÓN PRINCIPAL*/
var publicaciones = document.getElementById("publicaciones")
var tituloComentario = document.getElementById("tituloComentario");
var mensaje = document.getElementById("comentario");
var botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", agregarComentario);

function agregarComentario () {
  var contenedorDePublicacion = document.createElement("div");
  var comentario = document.createElement("p");
  var tituloDeComentario = document.createElement("h2");
  var botonEliminar = document.createElement("button");

  botonEliminar.className = "btn" + "waves-effect" + "waves-light" + "left" + "cyan" + "accent-4";
  botonEliminar.innerHTML = "cerrar";
  botonEliminar.addEventListener("click", eliminarPublicacion);

  contenedorDePublicacion.className="card-panel " + "hoverable";

  tituloDeComentario.innerHTML = tituloComentario.value;
  comentario.innerHTML = mensaje.value;
  publicaciones.appendChild(contenedorDePublicacion);
  contenedorDePublicacion.appendChild(tituloDeComentario);
  contenedorDePublicacion.appendChild(comentario);
  contenedorDePublicacion.appendChild(botonEliminar);

}

function eliminarPublicacion () {
  publicaciones.value = "";

}

$('#modal-text').modal('close');
