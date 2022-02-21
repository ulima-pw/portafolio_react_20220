import { guardarProyecto, modificarProyecto, obtenerProyectos } from "../../../dao/proyectos"

// Path : /api/proyectos
const proyectosHandler = async (req, res) => {
    if (req.method == "GET") {
        // Consultar en la base de datos
        // Devolver la respuesta
        const proyectos = await obtenerProyectos()

        res.json({
            msg: "",
            proyectos : proyectos
        })
    }else if (req.method == "POST") {
        // Registrar en la base de datos
        console.log("Se deberia guardar en la base de datos")
        const data = JSON.parse(req.body)
        await guardarProyecto(data.nombre, "billy", data.rating)
        res.json({
            msg: ""
        })
    } else if (req.method == "PUT") {
        /*
        data {
            id : 123
            nombre : "sdfdsf"
            rating : "sdfs"
        }
        */
        const data = JSON.parse(req.body)
        await modificarProyecto(data)
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