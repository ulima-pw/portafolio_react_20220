import { guardarProyecto } from "../../../dao/proyectos"

// Path : /api/proyectos
const proyectosHandler = async (req, res) => {
    if (req.method == "GET") {
        // Consultar en la base de datos
        // Devolver la respuesta


        res.json({
            msg: "",
            proyectos : [
                {"id" : 1, "nombre": "Proyecto de Prueba A", "usuario" : "billy", "rating" : 4.7},
                {"id" : 2, "nombre": "Proyecto B", "usuario" : "lionel", "rating" : 4.5}
            ]
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