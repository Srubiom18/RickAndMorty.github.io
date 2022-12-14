let inicioPersonaje = 1
let numeroPersonajeAparecen = 80
let personajeMaximo = 826
let contenedorPeronaje = document.getElementById("todosLosPersonajes")
let apiPersonaje = "https://rickandmortyapi.com/api/character/"

function generarPersonajes() {
    for (let i = 0; i < numeroPersonajeAparecen; i++) {
        if (inicioPersonaje >= personajeMaximo) {
    
        } else {
            
            fetch(apiPersonaje + inicioPersonaje)
            .then(response => { return response.json(); })
            .then(data => {
    
                console.log(data)
    
                let divPersonaje = document.createElement("div")
                divPersonaje.classList.add("personaje")
    
                let imagen = document.createElement("img")
                imagen.setAttribute("src", data.image)
    
                let nombre = document.createElement("p")
                nombre.innerHTML = data.name
                nombre.classList.add("nombre")

                let fav = document.createElement("i")
                fav.classList.add("icon-star")
                fav.classList.add("fav")
                fav.addEventListener("click", function(){guardarFav(data.id)}, false)
    
                divPersonaje.appendChild(imagen)
                divPersonaje.appendChild(nombre)
                divPersonaje.appendChild(fav)
                contenedorPeronaje.appendChild(divPersonaje)
    
            });
    
            
        }
        inicioPersonaje++
    }
}
generarPersonajes()