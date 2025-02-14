// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

let listaAmigos = [];

function agregarAmigo(){
    let ingresoNombre = document.getElementById('amigo').value;
    console.log(ingresoNombre);
    
    if (ingresoNombre == ""){
        alert('Por favor, ingrese un nombre');
        return;
    } else {
        listaAmigos.push(ingresoNombre);
        console.log(listaAmigos);   
    }
}

