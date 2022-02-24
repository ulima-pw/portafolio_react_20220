import db from "../sequelize/models"

const obtenerTecnologias = async () => {
    const tecnologias = await db.Tecnologia.findAll()
    return tecnologias
}

export { obtenerTecnologias }