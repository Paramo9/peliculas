import React from 'react'
import Barra_Navegacion from './Barra_Navegacion'

class Inicio extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <h1 align="center">El Club de la Película</h1>
                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                        <Barra_Navegacion />
                        Inicio {localStorage.getItem("accion")}
                    </div>
                )
            }
    }

export default Inicio