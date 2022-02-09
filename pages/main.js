import { useEffect, useState } from "react"
import { eliminarProyecto, guardarProyecto, obtenerProyectos } from "../dao/proyectos"
import Footer from "../components/footer.component"
import ListaProyectos from "../components/lista_proyectos.component"
import MenuNavegacion from "../components/menu_navegacion.component"
import ProyectoModal from "../components/proyecto_modal.component"

function MainPage() {
    const [debeMostrarModal, setDebeMostrarModal] = useState(false)
    const [listadoProyectos, setListadoProyectos] = useState([])

    useEffect(() => {
        setListadoProyectos(obtenerProyectos())
    }, [])

    const butNuevoOnClick = () => {
        setDebeMostrarModal(true)
    }

    const onModalClose = () => {
        setDebeMostrarModal(false)
    }

    const guardarProyectoHandler = (nombreProyecto, usuario, rating) => {
        console.log("Va a encargarse de guarddar un proyecto en la bd")
        guardarProyecto(nombreProyecto, usuario, rating)
        setListadoProyectos(obtenerProyectos())
        //location.reload()
        setDebeMostrarModal(false)
    }

    const eliminarProyectoHandler = (id) => {
        eliminarProyecto(id)
        setListadoProyectos(obtenerProyectos())
    }

    return <div>
        <h1>Main Page</h1>
        <MenuNavegacion />
        <div className="mt-4">
            <button className="btn btn-primary" 
                onClick={ butNuevoOnClick }>
                Nuevo
            </button>
        </div>
        <ListaProyectos proyectos={ listadoProyectos } modo={ "crud" }
            onEliminarProyecto={ eliminarProyectoHandler }/>
        <Footer />
        <ProyectoModal mostrar={ debeMostrarModal } 
            ocultar={ onModalClose } onGuardarProyecto={ guardarProyectoHandler }/>
    </div>
}

export default MainPage