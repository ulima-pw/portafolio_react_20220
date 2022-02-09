const guardarProyecto = (nombreProyecto, usuario, rating) => {
    const proyecto = {
        id : 1,
        nombre : nombreProyecto,
        usuario : usuario,
        rating : rating
    }

    const proyectosStr = localStorage.getItem("proyectos")

    // [{"id" : 1, "nombre" : "sdfsdf", "usuario" : "wer2", "rating" : 4}, {}, {}]
    if (proyectosStr != null) {
        const proyectos = JSON.parse(proyectosStr)
        const ultimoId = proyectos[proyectos.length - 1].id
        proyecto.id = ultimoId + 1
        proyectos.push(proyecto)

        localStorage.setItem("proyectos", JSON.stringify(proyectos))
    }else {
        const proyectos = [proyecto]
        localStorage.setItem("proyectos", JSON.stringify(proyectos))
    }
}

const obtenerProyectos = () => {
    const proyectosStr = localStorage.getItem("proyectos")
    if (proyectosStr != null) {
        return JSON.parse(proyectosStr)
    }else {
        return []
    }
}

const eliminarProyecto = (id) => {
    const proyectosStr = localStorage.getItem("proyectos")
    if (proyectosStr != null) {
        const proyectos = JSON.parse(proyectosStr)

        let posicion = 0;
        let posicionEncontrada = -1;
        for (let proyecto of proyectos) {
            if (proyecto.id == id) {
                posicionEncontrada = posicion
                break
            }
            posicion++;
        }
        
        if (posicionEncontrada >= 0) {
            proyectos.splice(posicionEncontrada, 1)

            localStorage.setItem("proyectos", JSON.stringify(proyectos))
        }
        
    }
}

export  { guardarProyecto, obtenerProyectos, eliminarProyecto }