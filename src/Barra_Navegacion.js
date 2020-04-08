import React from 'react'
import './barra.css'
import imagenMenu from './menu.png'
import { Redirect } from 'react-router-dom'

class Barra_Navegacion extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {r1: false}
                this.handleCerrarSesion = this.handleCerrarSesion.bind(this)
            }
        
        handleCerrarSesion(event)
            {
                alert("entra")
                event.preventDefault();
                localStorage.clear()
                this.setState({r1: true})
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/peliculas/login"} />
                    }
                return(
                    <header>
                        <input type="checkbox" id="btn-menu" />
                        <label htmlFor="btn-menu"><img src={imagenMenu} width="30px" height="30px" alt="" /></label>
                        <nav className="menu">
                            <ul>
                                <li>Películas</li>
                                <li>Series</li>
                                <li>Favoritas</li>
                                <li>Mi Perfil</li>
                                <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                            </ul>
                        </nav>
                    </header>
                )
            }
    }

export default Barra_Navegacion