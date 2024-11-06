document.addEventListener('DOMContentLoaded', function () {
    const datoGuardado = localStorage.getItem('datoGuardado'); // Obtiene el dato del localStorage
  
    if (datoGuardado) {
      document.getElementById('data').textContent = datoGuardado; // Muestra el dato en la página 
    } else {
      document.getElementById('data').textContent = 'No hay datos guardados.';
    }
  });