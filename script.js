// Funció per començar el joc i mostrar la primera pista
document.getElementById("btnComençar").addEventListener("click", function() {
  document.getElementById("començar").style.display = "none"; // Amaga el botó "Començar"
  document.getElementById("pistes").style.display = "block"; // Mostra les pistes
  mostrarPista("pista1");
});

// Funció per mostrar una pista específica
function mostrarPista(idPista) {
  document.getElementById(idPista).style.display = "block";
}

// Funció genèrica per revelar la resposta d'una pista i mostrar la següent
function revelarPista(idResposta, idSeguentPista) {
  document.getElementById(idResposta).style.display = "block"; // Mostra la resposta
  if (idSeguentPista) {
    mostrarPista(idSeguentPista); // Mostra la següent pista si existeix
  } else {
    document.getElementById("regals").style.display = "block"; // Mostra els regals finals si no hi ha més pistes
  }
}

function revelarRegals() {
  document.getElementById("resposta6").style.display = "block"; // Mostra la resposta de la Pista 6
  document.getElementById("regals").style.display = "block"; // Mostra els regals finals
}
