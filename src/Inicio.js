import React from 'react'
import Barra_Navegacion from './Barra_Navegacion'
import { Redirect } from 'react-router-dom'

class Inicio extends React.Component
    {
        render()
            {
                if(localStorage.getItem("accion") == "1")
                    {
                        return <Redirect to={"/peliculas/login"} />
                    }
                return(
                    <div>
                        <h1 align="center">El Club de la Película</h1>
                        <h2 align="center">La primera regla del Club de la Película es no hablar del Club de la Película</h2>
                        <Barra_Navegacion />
                        Inicio
                    </div>
                )
            }
    }

export default Inicio