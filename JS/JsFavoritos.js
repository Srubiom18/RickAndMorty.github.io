if (localStorage.getItem("fav") == undefined) {

    let contenedorFavs = document.getElementById("contenedorFavs")
    let p = document.createElement("p")
    p.innerHTML = "You don't have anything in favorites yet"
    p.classList.add("vacio")
    contenedorFavs.appendChild(p)

} else {
    let todosLosFavs = localStorage.getItem("fav").split("-")


for (let i = 0; i < todosLosFavs.length; i++) {

    if (todosLosFavs[i] != "") {

        let divPersonajes = document.getElementById("personajes")
    let personajeApi = "https://rickandmortyapi.com/api/character/" + todosLosFavs[i]

    fetch(personajeApi)
    .then(response => { return response.json(); })
    .then(data => {

        let divPersonaje = document.createElement("div")
        divPersonaje.classList.add("personaje")

        let imagen = document.createElement("img")
        imagen.setAttribute("src", data.image)

        let nombre = document.createElement("p")
        nombre.innerHTML = data.name

        let fav = document.createElement("i")
        fav.classList.add("icon-star")
        fav.classList.add("fav")
        fav.addEventListener("click", function(){guardarFav(todosLosFavs[i])}, false)

        divPersonaje.appendChild(imagen)
        divPersonaje.appendChild(nombre)
        divPersonaje.appendChild(fav)
        
        divPersonajes.appendChild(divPersonaje)
        

        
});

    }
}
}