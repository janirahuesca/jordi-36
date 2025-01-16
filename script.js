document.getElementById('btnComencar').addEventListener('click', () => {
  document.getElementById('comencar').style.display = 'none';
  document.getElementById('pistes').style.display = 'block';
  mostrarPista('pista1');
});

function mostrarPista(id) {
  document.querySelectorAll('.pista').forEach(pista => {
    pista.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function revelarParagraf(paragrafId) {
  document.getElementById(paragrafId).style.display = 'block';
}

function revelarRegals() {
  document.querySelector('.pistes').style.display = 'none';
  document.getElementById('regals').style.display = 'block';
}