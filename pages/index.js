import MenuNavegacion from "../components/menu_navegacion.component";
import Banner from "../components/banner.component";
import ListaProyectos from "../components/lista_proyectos.component";
import FormularioLogin from "../components/formulario_login.component";
import Footer from "../components/footer.component";

export default function Home() {
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
                <ListaProyectos />
                <FormularioLogin />
            </div>
        </div>
        <Footer />
    </div>
}
