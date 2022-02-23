import db from "../sequelize/models"

const obtenerUsuarios = async () => {
    const usuarios = await db.Usuario.findAll({
        order : [
            ["id", "ASC"]
        ]
    })
    return usuarios
}

const obtenerUsuario = async (id) => {
    return await db.Usuario.findOne({
        where : {
            id : id
        }
    })
}

export { obtenerUsuarios, obtenerUsuario }