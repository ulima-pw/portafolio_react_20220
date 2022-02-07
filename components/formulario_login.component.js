import { useState } from "react"

const FormularioLogin = (props) => {

    // Variables internas (variables de estado) del componente
    const [txtUsername, setTxtUsername] = useState("")
    const [txtPassword, setTxtPassword] = useState("")

    const txtUsernameOnChange = (event) => {
        const txtUsernameIngresado = event.target.value
        setTxtUsername(txtUsernameIngresado)
    }

    const txtPasswordOnChange = (event) => {
        setTxtPassword(event.target.value)
    }

    const butLoginOnClick = () => {
        console.log(`Username: ${txtUsername}`)
        console.log(`Password: ${txtPassword}`)
        
    }

    return <aside className="col-md-4">
        <div className="card">
            <div className="card-body">
                <h3>Login</h3>
                <form>
                    <div>
                        <label htmlFor="txt_username" className="form-label">Username</label>
                        <input id="txt_username" type="text" className="form-control" 
                               defaultValue={ txtUsername } onChange={ txtUsernameOnChange }/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="txt_password" className="form-label">Password</label>
                        <input id="txt_password" type="password" className="form-control" 
                               defaultValue={ txtPassword } onChange={ txtPasswordOnChange }/>
                    </div>
                    <button id="butLogin" className="btn btn-primary" type="button"
                            onClick={ butLoginOnClick }>Login</button>
                    <a href="#">Registro</a>
                </form>
            </div>
        </div>
    </aside>
}

export default FormularioLogin