import React from 'react'
import {Link} from 'react-router-dom'

class Login_Incorrecto extends React.Component
    {

        render()
            {
                return(
                    <div>
                        <h1 align="center">El usuario ingresado es incorrecto</h1><br/>
                        <h2 align="center">Intente nuevamente</h2><br/>
                        <form onSubmit={this.handleSubmit}>
                        <div align="center"><Link to="/peliculas/login"><input type="submit" value="Regresar" /></Link></div><br />
                        <h2 align="center">¿Aún no te has Registrado?</h2>
                        <h3 align="center"><Link to="/peliculas/registrar">Regístrate aquí</Link></h3>
                        </form>
                    </div>
                )
            }
    }

export default Login_Incorrecto