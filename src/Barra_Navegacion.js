import React from 'react'
import './barra.css'

class Barra_Navegacion extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <nav class="menu">
                            <ol>
                                <a href="#0">Películas</a>
                                <ol className="sub-menu">
                                    <li className="menu-item"><a href="#0">Favoritas</a></li>
                                </ol>
                                <a href="#0">Series</a>
                                <ol className="sub-menu">
                                    <li className="menu-item"><a href="#0">Favoritas</a></li>
                                </ol>
                                <a href="#0">Mi Perfil</a>
                                <ol className="sub-menu">
                                    <li className="menu-item"><a href="#0">Resumen</a></li>
                                    <li className="menu-item"><a href="#0">Actualizar Datos</a></li>
                                    <li className="menu-item"><a href="#0">Cerrar Sesión</a></li>
                                </ol>
                            </ol>
                        </nav>
                    </div>
                )
            }
    }

export default Barra_Navegacion