// http://localhost:4000/api/alumnos


// Endpoint o mi primer servicio
// Ruta (path): /api/alumnos
// Metodo (method)
const alumnoHandler = (req, res) => {
    //res.send("Hola Progra web")
    console.log(req.query)
    res.json({
        codigo : req.query.codigo,
        nombre : req.query.nombre,
        msg : "OK"
    })
}

export default alumnoHandler