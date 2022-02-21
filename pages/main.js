import { useEffect, useState } from "react"
import Footer from "../components/footer.component"
import ListaProyectos from "../components/lista_proyectos.component"
import MenuNavegacion from "../components/menu_navegacion.component"
import ProyectoModal from "../components/proyecto_modal.component"

function MainPage() {
    const [debeMostrarModal, setDebeMostrarModal] = useState(false)
    const [listadoProyectos, setListadoProyectos] = useState([])
    const [modoFormulario, setModoFormulario] = useState("nuevo") // modo: nuevo | edicion

    const obtenerProyectosHTTP = async () => {
        let response = await fetch("/api/proyectos")
        const data = await response.json()
        return data
    }

    useEffect(async () => {
        // Hacemos una peticion al backend
        const data = await obtenerProyectosHTTP()
        setListadoProyectos(data.proyectos)
    }, [])

    const butNuevoOnClick = () => {
        setModoFormulario("nuevo")
        setDebeMostrarModal(true)
    }

    const onModalClose = () => {
        setDebeMostrarModal(false)
    }

    const guardarProyectoHandler = async (nombreProyecto, usuario, rating) => {
        console.log("Va a encargarse de guarddar un proyecto en la bd")
        const proyecto = {
            nombre : nombreProyecto,
            usuario : usuario,
            rating : rating
        }

        // peticion a backend para agregar un nuevo proyecto
        const resp = await fetch("/api/proyectos", {
            method : "POST",
            body : JSON.stringify(proyecto)
        })
        const data = await resp.json()

        if (data.msg == "") {
            setDebeMostrarModal(false)
            const dataProyectos = await obtenerProyectosHTTP()
            setListadoProyectos(dataProyectos.proyectos)
        }
        //setListadoProyectos(obtenerProyectos())
        //location.reload()
        
    }

    const eliminarProyectoHandler = async (id) => {

        // 1. Hacer peticion HTTP delete al servidor /api/proyectos/id
        const resp = await fetch(`/api/proyectos/${id}`, {
            method : "DELETE"
        })
        const data = await resp.json()

        if (data.msg == "") {
            // 2. Recargamos los proyectos
            const dataProyectos = await obtenerProyectosHTTP()
            setListadoProyectos(dataProyectos.proyectos)
        }
    }

    const editarProyectoModalHandler = (id) => {
        setModoFormulario("edicion")
        setDebeMostrarModal(true)
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
            onEliminarProyecto={ eliminarProyectoHandler }
            onEditarProyecto={ editarProyectoModalHandler }/>
        <Footer />
        <ProyectoModal mostrar={ debeMostrarModal } 
            ocultar={ onModalClose } onGuardarProyecto={ guardarProyectoHandler }
            modo={ modoFormulario }/>
    </div>
}

export default MainPage