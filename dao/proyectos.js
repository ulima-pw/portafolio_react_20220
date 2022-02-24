//import db from "../sequelize/models"
const db = require("../sequelize/models")


const guardarProyecto = async (nombre, usuario, rating, tecnologias) => {
    // Insercion
    const proyectoGuardado = await db.Proyecto.create({
        nombre : nombre,
        idusuario : usuario,
        rating : rating
    })

    // Registro de datos en la tabla intermedia
    for (let idtecnologia of tecnologias) {
        await db.ProyectoXTecnologia.create({
            idproyecto : proyectoGuardado.id,
            idtecnologia : idtecnologia
        })
    }

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
    // Eliminar los proyectos de id en la tabla intermedia
    await db.ProyectoXTecnologia.destroy({
        where : {
            idproyecto : id
        }
    })

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

    // Eliminar todas las tecnologias de proyecto en tabla intermedia
    await db.ProyectoXTecnologia.destroy({
        where : {
            idproyecto : proyecto.id
        }
    })

    // Agregamos las nuevas tecnologias en tabla intermedia
    for (let idtecnologia of proyecto.tecnologias) {
        await db.ProyectoXTecnologia.create({
            idproyecto : proyectoGuardado.id,
            idtecnologia : idtecnologia
        })
    }
    // Proyecto que queremos modificar
    const proyectoAModificar = await obtenerProyecto(proyecto.id)
    
    proyectoAModificar.nombre =proyecto.nombre
    proyectoAModificar.idusuario = proyecto.usuario
    proyectoAModificar.rating = proyecto.rating

    // Actualizamos proyecto en la bd
    await proyectoAModificar.save()
}

export { guardarProyecto, obtenerProyectos, eliminarProyecto, obtenerProyecto, modificarProyecto }