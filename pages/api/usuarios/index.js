import { obtenerUsuarios } from "../../../dao/usuarios"

const usuariosHandler = async (req, res) => {
    if (req.method == "GET") {
        const usuarios = await obtenerUsuarios()
        res.json({
            usuarios : usuarios,
            msg : ""
        })
    }else {
        res.status(400).json({
            msg : "ERROR: Metodo no disponible"
        })
    }
}

export default usuariosHandler