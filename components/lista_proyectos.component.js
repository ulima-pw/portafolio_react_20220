const ListaProyectos = () => {
    return <main className="col-md-8">
        <h3>Ranking</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre Proyecto</th>
                    <th>Usuario</th>
                    <th>Puntaje</th>
                </tr>
            </thead>
            <tbody id="data_proyectos">
            </tbody>
        </table>
    </main>
}

export default ListaProyectos