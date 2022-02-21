import { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"

const ProyectoModal = (props) => {
    const [txtNombreProyecto, setTxtNombreProyecto] = useState(
        props.proyecto == null ? "" : props.proyecto.nombre
    )
    const [txtUsuario, setTxtUsuario] = useState("")
    const [txtRating, setTxtRating] = useState(
        props.proyecto == null ? 0 : props.proyecto.rating
    )

    const txtNombreProyectoOnChange = (event) => {
        setTxtNombreProyecto(event.target.value)
    }

    const txtUsuarioOnChange = (event) => {
        setTxtUsuario(event.target.value)
    }

    const txtRatingOnChange = (event) => {
        setTxtRating(event.target.value)
    }

    const butGuardarOnClick = () => {
        props.onGuardarProyecto(txtNombreProyecto, txtUsuario, txtRating)
    }

    return <Modal show={ props.mostrar } 
                onHide={ props.ocultar }>
        <Modal.Header closeButton>
            <Modal.Title>Formulario Proyecto</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        Nombre de Proyecto
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={ txtNombreProyecto }
                        onChange={ txtNombreProyectoOnChange }/>
                </div>
                <div>
                    <label className="form-label">
                        Usuario
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={ txtUsuario }
                        onChange={ txtUsuarioOnChange }/>
                </div>
                <div>
                    <label className="form-label">
                        Rating
                    </label>
                    <input className="form-control"
                        type="number" defaultValue={ txtRating }
                        onChange={ txtRatingOnChange }/>
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Cerrar</Button>
            <Button variant="primary"
                onClick={ butGuardarOnClick }>Guardar</Button>
        </Modal.Footer>
    </Modal>
}

export default ProyectoModal