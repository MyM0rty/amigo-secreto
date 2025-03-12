let nombresAmigos = []; 

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


