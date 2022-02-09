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

export  { guardarProyecto, obtenerProyectos }