let nombresAmigos = []; 
let amigosSorteados = []; 

function agregarAmigo() {
    let nombre = document.getElementById("nombresAmigos").value; 
    let nombreValido = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombre.trim().length === 0) { 
        alert('Por favor, inserte un nombre.');
    }   
            //valida que ingresen nombres calidos y no numeros o caracteres no permitidos
            else if (!nombreValido.test(nombre)) {  
            alert('Por favor, ingrese solo letras y espacios.');
        }
        
    else if (nombresAmigos.includes(nombre)) {
    alert('Este nombre ya ha sido agregado.');
    } else {
        nombresAmigos.push(nombre); 
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

    amigosSorteados.push(amigoSorteado);
    nombresAmigos.splice(indiceAleatorio, 1);
    mostrarNombres(); 

    if (nombresAmigos.length === 0) {
        alert('Todos los amigos han sido sorteados. Reiniciando la lista.');
        amigosSorteados = []; 
    }
}