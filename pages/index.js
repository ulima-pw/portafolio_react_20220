import MenuNavegacion from "../components/menu_navegacion.component";
import Banner from "../components/banner.component";
import ListaProyectos from "../components/lista_proyectos.component";
import FormularioLogin from "../components/formulario_login.component";
import Footer from "../components/footer.component";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export default function Home() {
    // http://demo9667197.mockable.io/proyectos

    // const listadoProyectos = [
    //     {nombre : "Proyecto 1", usuario: "billy", puntaje : 4.9},
    //     {nombre : "Proyecto 2", usuario: "hernan", puntaje : 4.7},
    //     {nombre : "Proyecto 3", usuario: "jorge", puntaje : 4.4},
    //     {nombre : "Proyecto 4", usuario: "kory", puntaje : 4.3}
    // ]

    const [errorLogin, setErrorLogin] = useState(false)
    const [listadoProyectos, setListadoProyectos] = useState([])
    const [listaImagenes, setListaImagenes] = useState([])

    useEffect(async () => {
        // Llamada AJAX para cargar listado de proyectos
        let response = await fetch("/api/proyectos")
        const data = await response.json()
        setListadoProyectos(data.proyectos)

        // Llamada AJAX para cargar lista de urls de imagenes
        response = await fetch("/api/imagenes")
        const dataImagenes = await response.json()
        setListaImagenes(dataImagenes.images)

    }, [])

    const loginHandler = (username, password) => {
        if (username == "billy" && password == "123") {
            location.href = "/main"
        }else {
            console.log("Error en login")
            setErrorLogin(true)
        }
    }

    return <div>
        <div>
            <header>
                <Image className="logo" src="/images/logo_ulima.jpg" thumbnail={true}/>
                <h1>Mi Portafolio</h1>
            </header>
            <MenuNavegacion />
        </div>
        <div className="mt-4">
            <Banner images={ listaImagenes }/>
            <div className="row mt-4">
                <ListaProyectos proyectos={ listadoProyectos } modo={ "lista" }/>
                <FormularioLogin onLogin={ loginHandler } error={ errorLogin }/>
            </div>
        </div>
        <Footer />
    </div>
}
