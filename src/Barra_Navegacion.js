import React from 'react'
import './barra.css'
import imagenMenu from './menu.png'

class Barra_Navegacion extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.handleCerrarSesion = this.handleCerrarSesion.bind(this)
            }
        
        handleCerrarSesion(event)
            {
                event.preventDefault();
                localStorage.clear()
                localStorage.setItem("accion", "1")
            }

        render()
            {
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