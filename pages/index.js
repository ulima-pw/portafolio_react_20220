import MenuNavegacion from "../components/menu_navegacion.component";
import Banner from "../components/banner.component";
import ListaProyectos from "../components/lista_proyectos.component";
import FormularioLogin from "../components/formulario_login.component";
import Footer from "../components/footer.component";

export default function Home() {
    const listadoProyectos = [
        {nombre : "Proyecto 1", usuario: "billy", puntaje : 4.9},
        {nombre : "Proyecto 2", usuario: "hernan", puntaje : 4.7},
        {nombre : "Proyecto 3", usuario: "jorge", puntaje : 4.4},
        {nombre : "Proyecto 4", usuario: "kory", puntaje : 4.3}
    ]
    return <div>
        <div>
            <header>
                <h1>Mi Portafolio</h1>
            </header>
            <MenuNavegacion />
        </div>
        <div className="mt-4">
            <Banner />
            <div className="row mt-4">
                <ListaProyectos proyectos={ listadoProyectos } />
                <FormularioLogin />
            </div>
        </div>
        <Footer />
    </div>
}
