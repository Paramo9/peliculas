import React from 'react'
import './barra.css'

class Barra_Navegacion extends React.Component
    {
        render()
            {
                return(
                    <div className="navegacion">
                        <nav>
                            <ol>
                                <li>
                                    Películas
                                    <ol>
                                        <li>Favoritas</li>
                                    </ol>
                                </li>
                                <li>
                                    Series
                                    <ol>
                                        <li>Favoritas</li>
                                    </ol>
                                </li>
                                <li>
                                    Mi Perfil
                                    <ol>
                                        <li>Resumen</li>
                                        <li>Actualizar Datos</li>
                                        <li>Cerrar Sesión</li>
                                    </ol>
                                </li>
                            </ol>
                        </nav>
                    </div>
                )
            }
    }

export default Barra_Navegacion