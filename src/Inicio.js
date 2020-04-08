import React from 'react'
import './barra.css'
import imagenMenu from './menu.png'
import { Redirect } from 'react-router-dom'
import Mi_Perfil from './Mi_Perfil'

class Inicio extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {r1: false, r2: false}
                this.handleCerrarSesion = this.handleCerrarSesion.bind(this)
                this.handleMiPerfil = this.handleMiPerfil.bind(this)
            }

        handleCerrarSesion(event)
            {
                event.preventDefault();
                localStorage.clear()
                this.setState({r1: true})
            }
        
        handleMiPerfil(event)
            {
                event.preventDefault();
                this.setState({r2: true})
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/peliculas/login"} />
                    }
                if(this.state.r2)
                    {
                        return(
                            <div>
                                <h1 align="center">El Club de la Película</h1>
                                <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                <header>
                                    <input type="checkbox" id="btn-menu" />
                                    <label htmlFor="btn-menu"><img src={imagenMenu} width="30px" height="30px" alt="" /></label>
                                    <nav className="menu">
                                        <ul>
                                            <li>Películas</li>
                                            <li>Series</li>
                                            <li>Favoritas</li>
                                            <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                            <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                        </ul>
                                    </nav>
                                </header>
                                <Mi_Perfil />
                            </div>
                        )
                    }
                else
                    {
                        return(
                            <div>
                                <h1 align="center">El Club de la Película</h1>
                                <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                <header>
                                    <input type="checkbox" id="btn-menu" />
                                    <label htmlFor="btn-menu"><img src={imagenMenu} width="30px" height="30px" alt="" /></label>
                                    <nav className="menu">
                                        <ul>
                                            <li>Películas</li>
                                            <li>Series</li>
                                            <li>Favoritas</li>
                                            <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                            <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                        </ul>
                                    </nav>
                                </header>
                                Inicio
                            </div>
                        )
                    }
            }
    }

export default Inicio