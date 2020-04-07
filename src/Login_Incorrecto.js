import React from 'react'
import {Link, Redirect} from 'react-router-dom'

class Login_Incorrecto extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {r1: false, r2: false, r3: false}
                this.handleSubmit = this.handleSubmit.bind(this)
            }
        
        handleSubmit(event)
            {
                event.preventDefault();
                this.setState({r1: true})
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/peliculas/"} />
                    }
                return(
                    <div>
                        <h1 align="center">El usuario ingresado es incorrecto</h1><br/>
                        <h2 align="center">Intente nuevamente</h2><br/>
                        <form onSubmit={this.handleSubmit}>
                            <div align="center"><input type="submit" value="Regresar" /></div><br />
                            <h2 align="center">¿Aún no te has Registrado?</h2>
                            <h3 align="center"><Link to="/peliculas/registrar">Regístrate aquí</Link></h3>
                        </form>
                    </div>
                )
            }
    }

export default Login_Incorrecto