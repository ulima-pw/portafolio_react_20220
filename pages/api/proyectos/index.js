import { guardarProyecto, modificarProyecto, obtenerProyectos } from "../../../dao/proyectos"
import { obtenerUsuario } from "../../../dao/usuarios"

// Path : /api/proyectos
const proyectosHandler = async (req, res) => {
    if (req.method == "GET") {
        // Consultar en la base de datos
        // Devolver la respuesta
        const proyectos = await obtenerProyectos()

        const proyectosConUsername = []
        for (let proyecto of proyectos) {
            const usuario = await obtenerUsuario(proyecto.idusuario)
            proyectosConUsername.push({
                id: proyecto.id,
                nombre: proyecto.nombre,
                idusuario: proyecto.idusuario,
                usuario : usuario == null ? "" : usuario.username,
                rating: proyecto.rating,
                createdAt: proyecto.createdAt,
                updatedAt: proyecto.updatedAt
            })
        }

        res.json({
            msg: "",
            proyectos : proyectosConUsername
        })
    }else if (req.method == "POST") {
        // Registrar en la base de datos
        console.log("Se deberia guardar en la base de datos")
        const data = JSON.parse(req.body)
        await guardarProyecto(data.nombre, data.usuario, data.rating, data.tecnologias)
        res.json({
            msg: ""
        })
    } else if (req.method == "PUT") {
        /*
        data {
            id : 123
            nombre : "sdfdsf",
            usuario : 1,
            rating : "sdfs",
            tecnologias : [1, 3, 5]
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