// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/
// array
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.ariaValueMax.trim();
    console.log(inputAmigo);
    
    if (nombreAmigo == ""){
        alert('Por favor, ingrese un nombre');
        return;
    }
    
    amigos.push(nombreAmigo);
    console.log(amigos);
    
    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizarLista(){
    let ulListaAmigos = document.getElementById("listaAmigos")
    ulListaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert('No hay amigos para sortear, agrega nombres primero');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnAdicionar').addEventListener("click", agregarAmigo)
    document.getElementById('btnSortear').addEventListener("click", sortearAmigo);    
})