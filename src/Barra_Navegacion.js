import React from 'react'
import './barra.css'
import imagenMenu from './menu.png'

class Barra_Navegacion extends React.Component
    {
        render()
            {
                return(
                    <header>
                        <input type="checkbox" id="btn-menu" />
                        <label htmlFor="btn-menu"><img src={imagenMenu} alt="" /></label>
                        <nav className="menu">
                            <ul>
                                <li>Peliculas</li>
                                <li>Series</li>
                                <li>Favoritas</li>
                                <li>Mi perfil</li>
                                <li>Actualizar Datos</li>
                            </ul>
                        </nav>
                    </header>
                )
            }
    }

export default Barra_Navegacion