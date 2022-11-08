// Función asíncrona IIFE con Patrón de Módulo
const getUsuarios = (async () => {

    // URL guardada en una variable
    const url = 'https://randomuser.me/api/?results=10';

    // Bloque try/catch para conectarse a la URL con método fetch
    try {
        const response = await fetch(url);

        // Guardar respuesta del arreglo de datos JSON en una variable 
        // con destructuring para acceder al atributo results
        const { results } = await response.json()

        // Guardar en la variable el elemento <ul>
        let lista = document.querySelector('#user-data');

        // Recorrer el arreglo obtenido con forEach(), e ir agregando
        // los elementos de a uno según cada usuario
        results.forEach((elemento)=>{
            lista.innerHTML += `<img src='${elemento.picture.large}' >
                                    <p>${elemento.name.first} ${elemento.name.last}</p>
                                    <p>${elemento.email}</p>
                                    <p>${elemento.phone}</p>
                                    </br>
                              `;
        });
    } 
    // Método catch() para atrapar errores
    catch(err) {
        console.log(err);
    }
    
})();
