import { eliminarProyecto } from "../../../../dao/proyectos"

// Path: /api/proyectos/[id]
const proyectosIdHandler = async (req, res) => {
    if (req.method == "DELETE") {
        const data = req.query
        console.log("Se eliminara el proyecto con id " + data.id)
        await eliminarProyecto(data.id)
        res.json({
            msg: ""
        })
    }
}

export default proyectosIdHandler