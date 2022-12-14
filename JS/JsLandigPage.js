
    //Este for imprime los 5 personajes principales de la serie (Familia de Rick)
    for (let i = 1; i <= 5; i++) {
        let principales = "https://rickandmortyapi.com/api/character/" + i;

        const contenedorPrincipales = document.getElementById("principales")
        const divPersonaje = document.createElement("div")
        const img = document.createElement("img");
        const nombre = document.createElement("p")
        const status = document.createElement("span")
        const fav = document.createElement("i")
        fav.classList.add("icon-star")
        fav.classList.add("fav")

        divPersonaje.setAttribute("class", "personaje")


        fetch(principales)
            .then(response => { return response.json(); })
            .then(data => {      
                img.setAttribute("src", data.image)            
                nombre.innerHTML = data.name
                status.innerHTML = data.status
                fav.addEventListener("click", function(){guardarFav(data.id)}, false)

                if (data.status = "Alive") {
                    status.style.backgroundColor = "rgb(98, 172, 98)"
                } else if (data.status = "Dead") {
                    status.style.backgroundColor = "rgb(207, 101, 101)"
                } else {
                    status.style.backgroundColor = "rgb(180, 180, 180)"
                }

            });

            divPersonaje.appendChild(img)
            divPersonaje.appendChild(nombre)
            divPersonaje.appendChild(status)
            divPersonaje.appendChild(fav)
            contenedorPrincipales.appendChild(divPersonaje)

    }


    //Este for imprime algunos personajes aleaorios
    for (let i = 0; i <= 19; i++) {

        const allPersonajes = document.getElementById("allPersonajes")
        let numPersonaje = Math.floor(Math.random() * 41);
        let pagina = "https://rickandmortyapi.com/api/character/?page=" + numPersonaje

        const divPersonaje = document.createElement("div")
        const img = document.createElement("img");
        const nombre = document.createElement("p")
        const status = document.createElement("span")
        const fav = document.createElement("i")
        fav.classList.add("icon-star")
        fav.classList.add("fav")

        divPersonaje.setAttribute("class", "personaje")


        fetch(pagina)
            .then(response => { return response.json(); })
            .then(data => {
                img.setAttribute("src", data.results[i].image)
                nombre.innerHTML = data.results[i].name
                status.innerHTML = data.results[i].status
                fav.addEventListener("click", function(){guardarFav(data.results[i].id)}, false)

                if (data.results[i].status == "Alive") {
                    status.style.backgroundColor = "rgb(98, 172, 98)"
                } else if (data.results[i].status == "Dead") {
                    status.style.backgroundColor = "rgb(207, 101, 101)"
                } else {
                    status.style.backgroundColor = "rgb(180, 180, 180)"
                }
            });

            divPersonaje.appendChild(img)
            divPersonaje.appendChild(nombre)
            divPersonaje.appendChild(status)
            divPersonaje.appendChild(fav)
            allPersonajes.appendChild(divPersonaje)
    }


    //Esta funcion genera un pesonaje aleatorio y imorime sus epecificaciones
    function personajeAleatorio() {
        let numPersonajeRandom = Math.floor(Math.random() * 826);
        let urlPersonaje = "https://rickandmortyapi.com/api/character/" + numPersonajeRandom

        fetch(urlPersonaje)
            .then(response => { return response.json(); })
            .then(data => {

                let fotoPersonaje = document.getElementById("fotoPerRandom")
                fotoPersonaje.setAttribute("src", data.image)

                let infoPersonaje = document.getElementById("infoPerRandom")
                let p1 = document.createElement("p")
                let p2 = document.createElement("p")
                let p3 = document.createElement("p")
                let p4 = document.createElement("p")
                let p5 = document.createElement("p")

                p1.innerHTML = "Nombre: " + data.name
                p2.innerHTML = "Genero: " + data.gender
                p3.innerHTML = "Especie: " + data.species
                p4.innerHTML = "Origen: " + data.origin.name
                p5.innerHTML = "Status: " + data.status

                infoPersonaje.innerHTML = ""
                infoPersonaje.appendChild(p1)
                infoPersonaje.appendChild(p2)
                infoPersonaje.appendChild(p3)
                infoPersonaje.appendChild(p4)
                infoPersonaje.appendChild(p5)


            });
    }
    
    
    let arrayComent = [];
    if (localStorage.getItem("coment") != undefined) {
        arrayComent = JSON.parse(localStorage.getItem("coment"))
    }


    function guardarComentario() {
        let comentario = document.querySelector("#comentario").value;
        let delComentario = document.getElementById("comentario")

        
        if (localStorage.getItem("coment") == undefined) {
            arrayComent.push(comentario)
            localStorage.setItem("coment", JSON.stringify(arrayComent))
            delComentario.value = ""

        } else {
            arrayComent = JSON.parse(localStorage.getItem("coment"))
            arrayComent.push(comentario)
            localStorage.setItem("coment", JSON.stringify(arrayComent))
            delComentario.value = ""
        }

        mostrarComentarios()
    }


    function mostrarComentarios() {
        if (localStorage.getItem("coment") == undefined) {

        } else {
            let comentarios = JSON.parse(localStorage.getItem("coment"))
            let contenedorComent = document.getElementById("cajonComent")
            contenedorComent.innerHTML = ""
        
            comentarios.forEach((element, i) => {

                let pComent = document.createElement("p")
                pComent.innerText = element
                pComent.addEventListener("click", function(){borrarComentario(pComent.innerText)}, false)      
                contenedorComent.appendChild(pComent)
            });
        }

    }
    mostrarComentarios()


    function borrarComentario(valor) {
        arrayComent = JSON.parse(localStorage.getItem("coment"))
        let arrayAux = []

        arrayComent.forEach((element) => {
            if (element != valor) {
                arrayAux.push(element)
            }
        });

        

        localStorage.setItem("coment", JSON.stringify(arrayAux))
        mostrarComentarios()
    }


    function search() {
        const contenedorPrincipales = document.getElementById("principales")
        contenedorPrincipales.innerHTML = ""
        const tituloSearch = document.getElementById("tituloSearch")
        let valor = document.getElementById("search").value
        tituloSearch.innerHTML = "Resultados de: " + valor
        console.log(valor)
        let llamadaApi = "https://rickandmortyapi.com/api/character/?name=" + valor

        fetch(llamadaApi)
            .then(response => { return response.json(); })
            .then(data => {
                console.log(data)

                for (let i = 0; i < data.results.length; i++) {
                    
                    let divPer = document.createElement("div")
                    divPer.setAttribute("class", "personaje")

                    let img = document.createElement("img")
                    img.setAttribute("src", data.results[i].image)

                    let nom = document.createElement("p")
                    nom.innerHTML = data.results[i].name

                    divPer.appendChild(img)
                    divPer.appendChild(nom)
                    contenedorPrincipales.appendChild(divPer)
                }


            });


    }