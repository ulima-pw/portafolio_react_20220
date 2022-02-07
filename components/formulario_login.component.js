import { useState } from "react"

const FormularioLogin = (props) => {

    // Variables internas (variables de estado) del componente
    const [txtUsername, setTxtUsername] = useState("hernan")
    const [txtPassword, setTxtPassword] = useState("123")

    return <aside className="col-md-4">
        <div className="card">
            <div className="card-body">
                <h3>Login</h3>
                <form>
                    <div>
                        <label htmlFor="txt_username" className="form-label">Username</label>
                        <input id="txt_username" type="text" className="form-control" defaultValue={ txtUsername } />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="txt_password" className="form-label">Password</label>
                        <input id="txt_password" type="password" className="form-control" defaultValue={ txtPassword }/>
                    </div>
                    <button id="butLogin" className="btn btn-primary" type="button">Login</button>
                    <a href="#">Registro</a>
                </form>
            </div>
        </div>
    </aside>
}

export default FormularioLogin