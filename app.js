//Array para almacenar los nombres:
let listaAmigos = [];

// Funcion para agregar nombres de amigos
function agregarAmigo() {
  const input = document.getElementById("amigo"); //Capturar el valor del campo de entrada
  const nombre = input.value.trim(); //eliminar espacios
 
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

//Visualizar la lista
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

 }