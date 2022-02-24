import { obtenerTecnologias } from "../../../dao/tecnologias"

const tecnologiasHandler = async (req, res) => {
    if (req.method == "GET") {
        // Comunicarnos con la bd para obtener lista de tecnologias
        const tecnologias = await obtenerTecnologias()
        res.json({
            msg : "",
            tecnologias : tecnologias
        })
    }else {
        res.status(400).json({
            msg : "Error, metodo no permitido"
        })
    }
}

export default tecnologiasHandler