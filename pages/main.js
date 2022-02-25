import { useEffect, useState } from "react"
import Footer from "../components/footer.component"
import ListaProyectos from "../components/lista_proyectos.component"
import MenuNavegacion from "../components/menu_navegacion.component"
import ProyectoModal from "../components/proyecto_modal.component"

function MainPage() {
    const [debeMostrarModal, setDebeMostrarModal] = useState(false)
    const [listadoProyectos, setListadoProyectos] = useState([])
    const [listadoUsuarios, setListadoUsuarios] = useState([])
    const [listadoTecnologias, setListadoTecnologias] = useState([])
    const [modoFormulario, setModoFormulario] = useState("nuevo") // modo: nuevo | edicion
    const [proyecto, setProyecto] = useState(null)

    const obtenerProyectosHTTP = async () => {
        let response = await fetch("/api/proyectos")
        const data = await response.json()
        return data
    }

    const obtenerUsuariosHTTP = async () => {
        let response = await fetch("/api/usuarios")
        const data = await response.json()
        return data
    }

    const obtenerTecnologiasHTTP = async () => {
        let response = await fetch("/api/tecnologias")
        const data = await response.json()
        return data
    }

    useEffect(async () => {
        // Hacemos una peticion al backend
        const data = await obtenerProyectosHTTP()
        const dataUsuarios = await obtenerUsuariosHTTP()
        const dataTecnologias = await obtenerTecnologiasHTTP()
        setListadoProyectos(data.proyectos)
        setListadoUsuarios(dataUsuarios.usuarios)
        setListadoTecnologias(dataTecnologias.tecnologias)
    }, [])

    const butNuevoOnClick = () => {
        setModoFormulario("nuevo")
        setDebeMostrarModal(true)
    }

    const onModalClose = () => {
        setDebeMostrarModal(false)
    }

    const guardarProyectoHandler = async (nombreProyecto, usuario, rating, tecnologias) => {
        console.log("Va a encargarse de guarddar un proyecto en la bd")
        const proyecto = {
            nombre : nombreProyecto,
            usuario : usuario,
            rating : rating,
            tecnologias : tecnologias
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

    const actualizarProyectoHandler = async (id, nombreProyecto, usuario, rating, tecnologias) => {
        const proyecto = {
            id : id,
            nombre : nombreProyecto,
            usuario : usuario,
            rating : rating,
            tecnologias : tecnologias
        }

        // peticion a backend para agregar un nuevo proyecto
        const resp = await fetch("/api/proyectos", {
            method : "PUT",
            body : JSON.stringify(proyecto)
        })
        const data = await resp.json()

        if (data.msg == "") {
            setDebeMostrarModal(false)
            const dataProyectos = await obtenerProyectosHTTP()
            setListadoProyectos(dataProyectos.proyectos)
        }
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

    const editarProyectoModalHandler = async (id) => {
        // Peticion HTTP para obtener un proyecto de determinado id
        const resp = await fetch(`/api/proyectos/${id}`)
        const data = await resp.json()

        setProyecto(data.proyecto)
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
            onActualizarProyecto={ actualizarProyectoHandler }
            modo={ modoFormulario } proyecto={ proyecto }
            usuarios= { listadoUsuarios }
            tecnologias={ listadoTecnologias } />
    </div>
}

export default MainPage