
//Ruta: /api/profesores
// Method [GET, POST]
// POST: podemos enviar data en el cuerpo de la peticion
// GET: la data la enviamos por la url
const profesoresHandler = (req, res) => {

    if (req.method == "GET") {
        // Se realizo una peticion GET
        res.json({
            msg : "Respuesta a peticion GET"
        })
    }else if (req.method == "POST"){
        // Se realizo una peticion POST
        console.log(req.body.nombre)
        res.json({
            msg : "Respuesta a peticion POST"
        })
    }
}

export default profesoresHandler