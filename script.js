// Funció per començar el joc i mostrar la primera pista
document.getElementById("btnComençar").addEventListener("click", function() {
    document.getElementById("començar").style.display = "none"; // Amaga el botó "Començar"
    document.getElementById("pistes").style.display = "block"; // Mostra les pistes
    mostrarPista1();
  });
  
  // Funció per mostrar la Pista 1
  function mostrarPista1() {
    document.getElementById("pista1").style.display = "block";
  }
  
  // Funció per revelar la resposta de la Pista 1 i mostrar la Pista 2
  function revelarPista1() {
    document.getElementById('resposta1').style.display = 'block'; // Mostra la resposta
    document.getElementById('pista2').style.display = 'block'; // Mostra la següent pista
  }
  
  // Funció per revelar la resposta de la Pista 2 i mostrar la Pista 3
  function revelarPista2() {
    document.getElementById('resposta2').style.display = 'block'; // Mostra la resposta
    document.getElementById('pista3').style.display = 'block'; // Mostra la següent pista
  }
  
  // Funció per revelar la resposta de la Pista 3 i mostrar la Pista 4
  function revelarPista3() {
    document.getElementById('resposta3').style.display = 'block'; // Mostra la resposta
    document.getElementById('pista4').style.display = 'block'; // Mostra la següent pista
  }
  
  // Funció per revelar la resposta de la Pista 4 i mostrar els regals finals
  function revelarRegals() {
    document.getElementById('resposta4').style.display = 'block'; // Mostra la resposta
    document.getElementById('regals').style.display = 'block'; // Mostra els regals finals
  }
  