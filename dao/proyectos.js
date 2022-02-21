//import db from "../sequelize/models"
const db = require("../sequelize/models")

const guardarProyecto = async (nombre, usuario, rating) => {
    // Insercion
    const proyectoGuardado = await db.Proyecto.create({
        nombre : nombre,
        rating : rating
    })

    return proyectoGuardado
}

const obtenerProyectos = async () => {
    // Query
    const proyectos = await db.Proyecto.findAll()
    return proyectos
}

const eliminarProyecto = async (id) => {
    // Delete a la tabla Proyecto
    await db.Proyecto.destroy({
        where : {
            id : id
        }
    })
}

const obtenerProyecto = (id) => {

}

const modificarProyecto = (proyecto) => {

}

export { guardarProyecto, obtenerProyectos, eliminarProyecto, obtenerProyecto, modificarProyecto }