let nombresAmigos = []; 

function agregarAmigo() {
    let nombres = document.getElementById("nombresAmigos").value; 

    if (nombres.trim().length === 0) { 
        alert('Por favor, inserte un nombre.');
    } else if (nombresAmigos.includes(nombres)) { // Verificar si el nombre ya existe
        alert('Este nombre ya ha sido agregado.');
    } else {
        nombresAmigos.push(nombres); // Agrega el nombre al array
        console.log(nombresAmigos); 
        mostrarNombres(); // Llama a la función para mostrar los nombres
        document.getElementById("nombresAmigos").value = ""; // Restablece el campo de texto a una cadena vacía
    }
}

function mostrarNombres() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; // Limpiar la lista existente para evitar duplicados

    // Usar un bucle for para recorrer el arreglo
    for (let i = 0; i < nombresAmigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento de lista
        li.textContent = nombresAmigos[i]; // Establecer el texto del elemento
        lista.appendChild(li); // Agregar el elemento a la lista
    }
}


