let nombresAmigos = []; 
let amigosSorteados = []; 

function agregarAmigo() {
    let nombres = document.getElementById("nombresAmigos").value; 

    if (nombres.trim().length === 0) { 
        alert('Por favor, inserte un nombre.');
    } else if (nombresAmigos.includes(nombres)) {  
        alert('Este nombre ya ha sido agregado.');
    } else {
        nombresAmigos.push(nombres); 
        console.log(nombresAmigos); 
        mostrarNombres(); 
        document.getElementById("nombresAmigos").value = ""; 
    }
}

function mostrarNombres() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 
    
    for (let i = 0; i < nombresAmigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = nombresAmigos[i]; 
        lista.appendChild(li);
    }
}

// Agregar el evento de escucha para la tecla "Enter"
//document.getElementById("nombresAmigos").addEventListener("keypress", function(event) {
//if (event.key === "Enter") {
//agregarAmigo(); // Llama a la función agregarAmigo si se presiona "Enter"
   // }
//});


function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSorteado = nombresAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigoSorteado;
    console.log(amigoSorteado);

    // Agregar el amigo sorteado a la lista de amigos sorteados
    amigosSorteados.push(amigoSorteado);

    // Eliminar el amigo sorteado de la lista original
    nombresAmigos.splice(indiceAleatorio, 1);
    mostrarNombres(); // Actualiza la lista visible

    // Verificar si todos los amigos han sido sorteados
    if (nombresAmigos.length === 0) {
        alert('Todos los amigos han sido sorteados. Reiniciando la lista.');
        amigosSorteados = []; // Reiniciar la lista de amigos sorteados
    }
}