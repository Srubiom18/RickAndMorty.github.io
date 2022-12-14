function guardarFav(id) {

    if (localStorage.getItem("fav") == undefined) {
        localStorage.setItem("fav", id )
    } else {
        let favLocal = localStorage.getItem("fav").split("-")
        let existe = false

        for (let i = 0; i < favLocal.length; i++) {
            if (favLocal[i] == id) {
                existe = true;
            }
        }

        if (existe) {
            let favDel = "";
            for (let i = 0; i < favLocal.length; i++) {
                if (favLocal[i] == id) {
                    
                } else {
                    if (i == 0) {
                        favDel = favLocal[i]
                    } else {
                        favDel = favDel + "-" + favLocal[i]
                    }
                }
            }
            localStorage.setItem("fav", favDel)
           
            if (favLocal.length == 1) {
                localStorage.removeItem("fav")
            }

            location.reload()

        } else {
            localStorage.setItem("fav", localStorage.getItem("fav") + "-" + id)
        }            
    }
}