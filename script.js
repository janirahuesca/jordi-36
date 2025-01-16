document.getElementById('btnComencar').addEventListener('click', () => {
  document.getElementById('intro').style.display = 'none';
  
  const pistes = document.getElementById('pistes');
  pistes.style.display = 'block';
  
  mostrarPista('pista1');
});

function mostrarPista(id) {
  document.querySelectorAll('.pista').forEach(pista => {
    pista.style.display = 'none';
  });
  
  const pista = document.getElementById(id);
  if (pista) {
    pista.style.display = 'block';
  }
}

function revelarParagraf(paragrafId) {
  const paragraf = document.getElementById(paragrafId);
  if (paragraf) {
    paragraf.style.display = 'block';
  }
}

function revelarRegals() {
  const pistes = document.querySelector('.pistes');
  if (pistes) {
    pistes.style.display = 'none';
  }
  
  const regals = document.getElementById('regals');
  if (regals) {
    regals.style.display = 'block';
  }
}
