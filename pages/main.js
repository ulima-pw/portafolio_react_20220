import { useState } from "react"
import Footer from "../components/footer.component"
import ListaProyectos from "../components/lista_proyectos.component"
import MenuNavegacion from "../components/menu_navegacion.component"
import ProyectoModal from "../components/proyecto_modal.component"

function MainPage() {
    const [debeMostrarModal, setDebeMostrarModal] = useState(false) 

    const butNuevoOnClick = () => {
        setDebeMostrarModal(true)
    }

    const onModalClose = () => {
        setDebeMostrarModal(false)
    }

    const guardarProyectoHandler = (nombreProyecto, usuario, rating) => {
        console.log("Va a encargarse de guarddar un proyecto en la bd")
        console.log(nombreProyecto)
        console.log(usuario)
        console.log(rating)
        setDebeMostrarModal(false)
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
        <ListaProyectos proyectos={[]} />
        <Footer />
        <ProyectoModal mostrar={ debeMostrarModal } 
            ocultar={ onModalClose } onGuardarProyecto={ guardarProyectoHandler }/>
    </div>
}

export default MainPage