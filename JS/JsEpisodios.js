let episodeApi = "https://rickandmortyapi.com/api/episode"
let paginacionEpisodioApi = "https://rickandmortyapi.com/api/episode?page="
let contadorEpisodio = 1;
let episodios = document.getElementById("episodios")
let rutaImagenes = "../IMG/Episodios/ep"
let selectCapitulos = document.getElementById("selectEpisodio")

fetch(episodeApi)
            .then(response => { return response.json(); })
            .then(data => {

                

                let paginasTotalApi = data.info.pages
                let numTotalCapitulos = data.info.count

                for (let i = 1; i <= numTotalCapitulos; i++) {
                    let opcion = document.createElement("option")
                    opcion.innerHTML = "Episodio Nº " + i
                    opcion.setAttribute("value", i - 1)
                    selectCapitulos.appendChild(opcion)
                }


                for (let i = 1; i <= paginasTotalApi; i++) {
                    let pagina = paginacionEpisodioApi + i;
                    fetch(pagina)
                        .then(response => { return response.json(); })
                        .then(data => {

                            let cantidadCapitulos = data.results.length
                            for (let i = 0; i < cantidadCapitulos; i++) {

                                let divEpisodio = document.createElement("div")
                                divEpisodio.classList.add("episodio")
                                let idEpisodio = 0 + contadorEpisodio
                                divEpisodio.addEventListener("click", function(){verEpisodio(idEpisodio)}, false)

                                let img = document.createElement("img")
                                let imagen = rutaImagenes + contadorEpisodio + ".jpg"
                                

                                if (contadorEpisodio == 42 || contadorEpisodio == 43 || contadorEpisodio == 44 || contadorEpisodio == 45 || contadorEpisodio == 46 || contadorEpisodio == 47 || contadorEpisodio == 49 || contadorEpisodio == 50 || contadorEpisodio == 51) {
                                    img.setAttribute("src", "../IMG/Episodios/default.png")
                                } else {
                                    img.setAttribute("src", imagen)
                                }

                                let span = document.createElement("span")

                                let PNombre = document.createElement("p")
                                PNombre.innerHTML = "<strong>Title: </strong>" + data.results[i].name

                                let PSalidaEpisodio = document.createElement("p")
                                PSalidaEpisodio.innerHTML = "<strong>Departure date: </strong>" + data.results[i].air_date

                                let numEpisodio = document.createElement("p")
                                numEpisodio.innerHTML = "<strong>Episode Nº " + contadorEpisodio + "</strong>"

                                span.appendChild(PNombre)
                                span.appendChild(PSalidaEpisodio)
                                span.appendChild(numEpisodio)
                                

                                divEpisodio.appendChild(img)
                                divEpisodio.appendChild(span)

                                contadorEpisodio++
                                episodios.appendChild(divEpisodio)
                            }
                    });
                }
            });
            

//Funcion para mostrar el episodio epecífico y sus caracteristicas pinchando en la imagen
function verEpisodio(id) {
    
    let urlEpisodio = episodeApi + "/" + id
    let contenedorEpisodios = document.getElementById("episodios")
    contenedorEpisodios.innerHTML = ""
    let h2 = document.getElementById("tituloH2")
    h2.innerHTML = "Episode Nº " + id

    
    fetch(urlEpisodio)
            .then(response => { return response.json(); })
            .then(data => {
                console.log(data)
                
                let table = document.createElement


                let img = document.createElement("img")
                let rutaimg = rutaImagenes + id + ".jpg"
                img.setAttribute("src", rutaimg)

                let p1 = document.createElement("p")
                let p2 = document.createElement("p")

                p1.innerHTML = "Name:" + data.name
                p2.innerHTML = "Created: " + data.created

                contenedorEpisodios.appendChild(img)
                contenedorEpisodios.appendChild(p1)
                contenedorEpisodios.appendChild(p2)


            });
}


//Funcion para mostrar el episodio epecífico y sus caracteristicas pinchando en el select
function mostrarEpiSelect() { 
    let urlEpisodio = episodeApi + "/" + selectCapitulos.value
    console.log(urlEpisodio)
    let contenedorEpisodios = document.getElementById("episodios")
    contenedorEpisodios.innerHTML = ""
    let h2 = document.getElementById("tituloH2")
    h2.innerHTML = "Episode Nº " + (parseInt(selectCapitulos.value, 10) + 1)

    
    fetch(urlEpisodio)
            .then(response => { return response.json(); })
            .then(data => {
                console.log(data)
                


                let img = document.createElement("img")
                let rutaimg = rutaImagenes + selectCapitulos.value + ".jpg"
                img.setAttribute("src", rutaimg)

                let p1 = document.createElement("p")
                let p2 = document.createElement("p")

                p1.innerHTML = "Name:" + data.name
                p2.innerHTML = "Created: " + data.created


                contenedorEpisodios.appendChild(img)
                contenedorEpisodios.appendChild(p1)
                contenedorEpisodios.appendChild(p2)


            });
}