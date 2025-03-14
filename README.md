<h1>Juego del Amigo secreto</h1>
<p>Tiare figueroa // Desafio alura</p>



<h2>Breve explicación de el juego</h2>

En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.


<h2>Breve explicación de el codigo</h2>

  Variables Iniciales:

nombresAmigos: un array que almacena los nombres de los amigos que se agregarán.
amigosSorteados: un array que almacenará los amigos que ya han sido sorteados.

  Función agregarAmigo():

Obtiene el valor del input con el ID nombresAmigos.
Verifica si el nombre está vacío o ya ha sido agregado. Si es así, muestra una alerta.
Si el nombre es válido, lo agrega al array nombresAmigos, muestra la lista actualizada y limpia el input.

  Función mostrarNombres():

Limpia la lista de amigos en el HTML y la vuelve a llenar con los nombres actuales en nombresAmigos, creando un elemento de lista (li) para cada nombre.

  Función sortearAmigo():

Verifica si hay amigos disponibles para sortear. Si no hay, muestra una alerta.
Selecciona un amigo al azar de nombresAmigos y lo muestra en el HTML.
Agrega el amigo sorteado a amigosSorteados y lo elimina de nombresAmigos.
Actualiza la lista visible de amigos.
Si todos los amigos han sido sorteados, reinicia la lista de amigos sorteados y muestra una alerta.
Evento de Teclado (comentado):

Hay un código comentado que permite agregar un amigo al presionar la tecla "Enter" agregado para agilizar el teste de el código
