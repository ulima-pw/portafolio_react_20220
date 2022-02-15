import styles from "../styles/menu_navegacion.component.module.css"

const MenuNavegacion = () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.fondo_secundario}` }>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Nosotros</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default MenuNavegacion