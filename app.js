//Array para almacenar los nombres:
let listaAmigos = [];

// Funcion para agregar nombres de amigos
function agregarAmigo() {
  const input = document.getElementById("amigo"); //Capturar el valor del campo de entrada
  const nombre = input.value.trim(); //eliminar espacios al principio y al final
 
    //Validar que en campo no esté vacío:
    if (nombre === ''){
        alert('Por favor, ingrese un nombre.');
        return;
    }

    listaAmigos.push(nombre); //Actualizar Array 
    input.value = ''; //Limpiar campo de entrada
    actualizarListaAmigos();
    input.focus();
}

//Visualizar la lista y añadir elementos
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos'); 
    listaAmigosElement.innerHTML = '';
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

//Sorteo aleatorio
 function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        alert('Por favor, agregue al menos un amigo a la lista.');
        return;
    }
    
    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigoSeleccionado}!`;
    resultadoElement.appendChild(li);

 }