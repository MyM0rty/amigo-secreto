let nombresAmigos = []; 

function agregarAmigo() {
    let nombres = document.getElementById("nombresAmigos").value; 

    if (nombres.trim().length === 0) { 
        alert('Por favor, inserte un nombre.');
    } else {
        nombresAmigos.push(nombres); 
        console.log(nombresAmigos); 
        mostrarNombres(); // Llama a la función para mostrar los nombres
    }
}

function mostrarNombres() {
    let lista = document.getElementById("listaAmigos"); // Asegúrate de tener un elemento con este ID
    lista.innerHTML = ""; // Limpia la lista antes de agregar los nuevos nombres
    nombresAmigos.forEach(nombre => {
        let li = document.createElement("li"); // Crea un nuevo elemento de lista
        li.textContent = nombre; // Establece el texto del elemento
        lista.appendChild(li); // Agrega el elemento a la lista
    });
}
    

