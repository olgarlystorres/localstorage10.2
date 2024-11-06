document.getElementById('buttonText').addEventListener('click', function (event){
    event.preventDefault();
    const inputText = document.getElementById('inputText').value; //evalua el valor de dato y lo obtiene

    localStorage.setItem('datoGuardado', inputText); // guardamos el dato en el localstorage
    document.getElementById('inputText').value = '';
    alert('Su dato se guardado exitosamente'); // cuando le damos guardar muestra una alerta de guardado 
});