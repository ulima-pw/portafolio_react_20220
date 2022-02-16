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

const obtenerProyectos = () => {

}

const eliminarProyecto = (id) => {

}

const obtenerProyecto = (id) => {

}

const modificarProyecto = (proyecto) => {

}

export { guardarProyecto, obtenerProyectos, eliminarProyecto, obtenerProyecto, modificarProyecto }