import React from 'react'
import './barra.css'
import imagenMenu from './menu.png'
import { Redirect } from 'react-router-dom'
import Mi_Perfil from './Mi_Perfil'
import Peliculas from './Peliculas'
import firebase from 'firebase'
import Series from './Series'
import Info_Pelicula from './Info_Pelicula'

class Inicio extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {r1: false, r2: false, borrar: 0}
                this.handleCerrarSesion = this.handleCerrarSesion.bind(this)
                this.handleMiPerfil = this.handleMiPerfil.bind(this)
                this.handlePeliculas = this.handlePeliculas.bind(this)
                this.handleSeries = this.handleSeries.bind(this)
                this.handleFavoritas = this.handleFavoritas.bind(this)
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
                localStorage.setItem("mi_perfil", "1")
                localStorage.setItem("peliculas", "0")
                localStorage.setItem("series", "0")
                localStorage.setItem("favoritas", "0")
                localStorage.setItem("infoPelicula", "0")
                this.forceUpdate()
            }

        handlePeliculas(event)
            {
                event.preventDefault();
                localStorage.setItem("mi_perfil", "0")
                localStorage.setItem("peliculas", "1")
                localStorage.setItem("series", "0")
                localStorage.setItem("favoritas", "0")
                localStorage.setItem("infoPelicula", "0")
                this.forceUpdate()
            }

        handleSeries(event)
            {
                event.preventDefault();
                localStorage.setItem("mi_perfil", "0")
                localStorage.setItem("peliculas", "0")
                localStorage.setItem("series", "1")
                localStorage.setItem("favoritas", "0")
                localStorage.setItem("infoPelicula", "0")
                this.forceUpdate()
            }
        handleFavoritas(event)
            {
                event.preventDefault();
                localStorage.setItem("mi_perfil", "0")
                localStorage.setItem("peliculas", "0")
                localStorage.setItem("series", "0")
                localStorage.setItem("favoritas", "1")
                localStorage.setItem("infoPelicula", "0")
                this.forceUpdate()
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/peliculas/login"} />
                    }
                if(localStorage.getItem("mi_perfil") == "1")
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
                                            <li onClick={this.handlePeliculas}>Películas</li>
                                            <li onClick={this.handleSeries}>Series</li>
                                            <li onClick={this.handleFavoritas}>Favoritas</li>
                                            <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                            <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                        </ul>
                                    </nav>
                                </header>
                                <Mi_Perfil />
                            </div>
                        )
                    }
                else if(localStorage.getItem("peliculas") == "1")
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
                                            <li onClick={this.handlePeliculas}>Películas</li>
                                            <li onClick={this.handleSeries}>Series</li>
                                            <li onClick={this.handleFavoritas}>Favoritas</li>
                                            <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                            <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                        </ul>
                                    </nav>
                                </header>
                                <Peliculas borrar={this.state.borrar} />
                            </div>
                        )
                    }
                else if(localStorage.getItem("series") == "1")
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
                                            <li onClick={this.handlePeliculas}>Películas</li>
                                            <li onClick={this.handleSeries}>Series</li>
                                            <li onClick={this.handleFavoritas}>Favoritas</li>
                                            <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                            <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                        </ul>
                                    </nav>
                                </header>
                                <Series />
                            </div>
                        )
                    }
                else if(localStorage.getItem("favoritas") == "1")
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
                                            <li onClick={this.handlePeliculas}>Películas</li>
                                            <li onClick={this.handleSeries}>Series</li>
                                            <li onClick={this.handleFavoritas}>Favoritas</li>
                                            <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                            <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                        </ul>
                                    </nav>
                                </header>
                                Favoritas
                            </div>
                        )
                    }
                else if(localStorage.getItem("infoPelicula") == "1")
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
                                            <li onClick={this.handlePeliculas}>Películas</li>
                                            <li onClick={this.handleSeries}>Series</li>
                                            <li onClick={this.handleFavoritas}>Favoritas</li>
                                            <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                            <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                        </ul>
                                    </nav>
                                </header>
                                <Info_Pelicula />
                            </div>
                        )
                    }
            }
    }

export default Inicio