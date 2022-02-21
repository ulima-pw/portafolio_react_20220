import { eliminarProyecto, obtenerProyecto } from "../../../../dao/proyectos"

// Path: /api/proyectos/[id]
const proyectosIdHandler = async (req, res) => {
    if (req.method == "DELETE") {
        const data = req.query
        console.log("Se eliminara el proyecto con id " + data.id)
        await eliminarProyecto(data.id)
        res.json({
            msg: ""
        })
    }else if (req.method == "GET") {
        const data = req.query
        const proyecto = await obtenerProyecto(data.id)
        res.json({
            msg: "",
            proyecto : proyecto
        })
    }
}

export default proyectosIdHandler