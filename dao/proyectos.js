//import db from "../sequelize/models"
const db = require("../sequelize/models")

const guardarProyecto = async (nombre, usuario, rating) => {
    // Insercion
    const proyectoGuardado = await db.Proyecto.create({
        nombre : nombre,
        idusuario : usuario,
        rating : rating
    })

    return proyectoGuardado
}

const obtenerProyectos = async () => {
    // Query
    const proyectos = await db.Proyecto.findAll({
        order : [
            ["id", "DESC"]
        ]
    })
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

const obtenerProyecto = async (id) => {
    // Query por un proyecto de determinado id
    const proyecto = await db.Proyecto.findOne({
        where : {
            id : id
        }
    })
    return proyecto
}

const modificarProyecto = async (proyecto) => {
    // Proyecto que queremos modificar
    const proyectoAModificar = await obtenerProyecto(proyecto.id)
    
    proyectoAModificar.nombre =proyecto.nombre
    proyectoAModificar.idusuario = proyecto.usuario
    proyectoAModificar.rating = proyecto.rating

    // Actualizamos proyecto en la bd
    await proyectoAModificar.save()
}

export { guardarProyecto, obtenerProyectos, eliminarProyecto, obtenerProyecto, modificarProyecto }