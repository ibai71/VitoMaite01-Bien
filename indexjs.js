/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function iniciarBD() {
    const solicitud = indexedDB.open("vitomaite04", 1);
    console.log("Intentando abrir la base de datos...");
    

    solicitud.onsuccess = function(evento) {
        bd = evento.target.result;
        console.log("Base de datos abierta exitosamente", bd);

        // Llamar a cargarResultadosBusqueda solo cuando la base de datos esté disponible
        cargarResultadosBusqueda();
    };

    solicitud.onerror = function(evento) {
        console.error("Error al abrir la base de datos:", evento.target.error);
    };

    solicitud.onupgradeneeded = function(evento) {
        bd = evento.target.result;
        console.log("Actualizando la base de datos (onupgradeneeded)");
        // Configura los object stores aquí si es necesario
    };
}

function handleSearchClick() {
    // Redireccionar a la página que deseas (por ejemplo, resultados.html)
    if (!bd) {
        alert("La base de datos aún no está inicializada. Intenta de nuevo.");
        return;
    }
     const queBuscas = document.getElementById('queBuscas').value;
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudad').value;
    
    sessionStorage.setItem("busquedaCiudad", ciudad);
    sessionStorage.setItem("busquedaGenero", queBuscas);
    sessionStorage.setItem("busquedaEdad", edad);

    // Verificar si todos los campos están completados
    if (queBuscas === "" || edad === "" || ciudad === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return; // Salir de la función si hay algún campo vacío
    }
    window.location.href = "busqueda-no-log.html";
}

function handleSearchClick2() {
    // Redireccionar a la página que deseas (por ejemplo, resultados.html)
    if (!bd) {
        alert("La base de datos aún no está inicializada. Intenta de nuevo.");
        return;
    }
    const queBuscas = document.getElementById('queBuscas').value;
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudad').value;
    
    sessionStorage.setItem("busquedaCiudad", ciudad);
    sessionStorage.setItem("busquedaGenero", queBuscas);
    sessionStorage.setItem("busquedaEdad", edad);

    // Verificar si todos los campos están completados
    if (queBuscas === "" || edad === "" || ciudad === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return; // Salir de la función si hay algún campo vacío
    }
    window.location.href = "busquedaLog.html";
}


function logout() {
    // Borra todos los datos del sessionStorage
    sessionStorage.clear();
}

