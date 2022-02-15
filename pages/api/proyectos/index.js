// Path : /api/proyectos
const proyectosHandler = (req, res) => {
    if (req.method == "GET") {
        res.json({
            msg: "",
            proyectos : [
                {"id" : 1, "nombre": "Proyecto de Prueba A", "usuario" : "billy", "rating" : 4.7},
                {"id" : 2, "nombre": "Proyecto B", "usuario" : "lionel", "rating" : 4.5}
            ]
        })
    }else {
        res.status(400).json({
            msg: "Metodo no definido"
        })
    }
}

export default proyectosHandler