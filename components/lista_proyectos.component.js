import { useState } from "react"

const ListaProyectos = (props) => {

    console.log(props.proyectos)
    const [seDebeMostrar, setSeDebeMostrar] = useState(true) // variable de estado del componente

    const butOcultarOnClick = () => {
        console.log("Se hizo click")
        setSeDebeMostrar(false) // cambiamos la variable de estado seDebeMostrar
    }

    const butMostrarOnClick = () => {
        console.log("Se hizo click")
        setSeDebeMostrar(true) // cambiamos la variable de estado seDebeMostrar
    }


    if (seDebeMostrar) {
        return <main className="col-md-8">
            <h3>Ranking</h3>
            <button type="button" className="btn btn-success" onClick={butOcultarOnClick} >Ocultar</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre Proyecto</th>
                        <th>Usuario</th>
                        <th>Puntaje</th>
                    </tr>
                </thead>
                <tbody id="data_proyectos">
                    {
                        props.proyectos.map((proyecto) => {
                            return <tr key={ proyecto.id }>
                                <td>{ proyecto.nombre }</td>
                                <td>{ proyecto.usuario }</td>
                                <td>{ proyecto.rating }</td>
                            </tr>
                        } )
                    }
                </tbody>
            </table>
        </main>
    }else {
        return <main className="col-md-8">
            <h3>Ranking</h3>
            <button type="button" className="btn btn-success" onClick={butMostrarOnClick} >Mostrar</button>
            <p>Tabla oculta</p>
        </main>
    }

}

export default ListaProyectos