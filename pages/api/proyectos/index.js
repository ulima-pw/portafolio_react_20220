import { guardarProyecto, obtenerProyectos } from "../../../dao/proyectos"

// Path : /api/proyectos
const proyectosHandler = async (req, res) => {
    if (req.method == "GET") {
        // Consultar en la base de datos
        // Devolver la respuesta
        const proyectos = obtenerProyectos()
        console.log(proyectos)

        res.json({
            msg: "",
            proyectos : proyectos
        })
    }else if (req.method == "POST") {
        // Registrar en la base de datos
        console.log("Se deberia guardar en la base de datos")
        const data = req.body
        await guardarProyecto(data.nombre, "billy", data.rating)
        res.json({
            msg: ""
        })
    }else {
        res.status(400).json({
            msg: "Metodo no definido"
        })
    }
}

export default proyectosHandler