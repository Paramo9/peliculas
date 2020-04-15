import React from 'react'
import './barra.css'
import imagenMenu from './menu.png'
import { Redirect } from 'react-router-dom'
import Mi_Perfil from './Mi_Perfil'
import Peliculas from './Peliculas'
import firebase from 'firebase'
import Series from './Series'
import Info_Pelicula from './Info_Pelicula'
import Info_Serie from './Info_Serie'
import Peliculas_Favoritas from './Peliculas_Favoritas'
import Series_Favoritas from './Series_Favoritas'
import Subir from './Subir'

class Inicio extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {r1: false, r2: false}
                this.handleCerrarSesion = this.handleCerrarSesion.bind(this)
                this.handleMiPerfil = this.handleMiPerfil.bind(this)
                this.handlePeliculas = this.handlePeliculas.bind(this)
                this.handleSeries = this.handleSeries.bind(this)
                this.handlePeliculasFavoritas = this.handlePeliculasFavoritas.bind(this)
                this.handleSeriesFavoritas = this.handleSeriesFavoritas.bind(this)
                this.handleSubir = this.handleSubir.bind(this)
                this.updateFlagPelicula = this.updateFlagPelicula
                this.updateFlagSerie = this.updateFlagSerie
            }

        updateFlagPelicula = (text) => {
            if(text==1)
                {
                    this.forceUpdate()
                }
        }

        updateFlagSerie = (text) => {
            if(text==1)
                {
                    this.forceUpdate()
                }
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
                localStorage.setItem("infoSerie", "0")
                localStorage.setItem("peliculasFavoritas", "0")
                localStorage.setItem("seriesFavoritas", "0")
                localStorage.setItem("subir", "0")
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
                localStorage.setItem("infoSerie", "0")
                localStorage.setItem("peliculasFavoritas", "0")
                localStorage.setItem("seriesFavoritas", "0")
                localStorage.setItem("subir", "0")
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
                localStorage.setItem("infoSerie", "0")
                localStorage.setItem("peliculasFavoritas", "0")
                localStorage.setItem("seriesFavoritas", "0")
                localStorage.setItem("subir", "0")
                this.forceUpdate()
            }

        handlePeliculasFavoritas(event)
            {
                event.preventDefault();
                localStorage.setItem("mi_perfil", "0")
                localStorage.setItem("peliculas", "0")
                localStorage.setItem("series", "0")
                localStorage.setItem("favoritas", "0")
                localStorage.setItem("infoPelicula", "0")
                localStorage.setItem("infoSerie", "0")
                localStorage.setItem("peliculasFavoritas", "1")
                localStorage.setItem("seriesFavoritas", "0")
                localStorage.setItem("subir", "0")
                this.forceUpdate()
            }

        handleSeriesFavoritas(event)
            {
                event.preventDefault();
                localStorage.setItem("mi_perfil", "0")
                localStorage.setItem("peliculas", "0")
                localStorage.setItem("series", "0")
                localStorage.setItem("favoritas", "0")
                localStorage.setItem("infoPelicula", "0")
                localStorage.setItem("infoSerie", "0")
                localStorage.setItem("peliculasFavoritas", "0")
                localStorage.setItem("seriesFavoritas", "1")
                localStorage.setItem("subir", "0")
                this.forceUpdate()
            }

        handleSubir(event)
            {
                event.preventDefault();
                localStorage.setItem("mi_perfil", "0")
                localStorage.setItem("peliculas", "0")
                localStorage.setItem("series", "0")
                localStorage.setItem("favoritas", "0")
                localStorage.setItem("infoPelicula", "0")
                localStorage.setItem("infoSerie", "0")
                localStorage.setItem("peliculasFavoritas", "0")
                localStorage.setItem("seriesFavoritas", "0")
                localStorage.setItem("subir", "1")
                this.forceUpdate()
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/peliculas/login"} />
                    }
                if(localStorage.getItem("nivel") == "usuario")
                    {
                        if(localStorage.getItem("mi_perfil") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
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
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Peliculas flag={this.updateFlagPelicula} />
                                    </div>
                                )
                            }
                        else if(localStorage.getItem("peliculasFavoritas") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Peliculas_Favoritas flag={this.updateFlagPelicula} />
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
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Series flag={this.updateFlagSerie} />
                                    </div>
                                )
                            }
                        else if(localStorage.getItem("seriesFavoritas") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        < Series_Favoritas flag={this.updateFlagSerie} />
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
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Info_Pelicula nombre={localStorage.getItem("pelicula")} url={localStorage.getItem("url")} fecha={localStorage.getItem("fecha")} />
                                    </div>
                                )
                            }
                        else if(localStorage.getItem("infoSerie") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Info_Serie nombre={localStorage.getItem("serie")} url={localStorage.getItem("url")} temporada={localStorage.getItem("temporada")} />
                                    </div>
                                )
                            }
                    }
                else if(localStorage.getItem("nivel") == "administrador")
                    {
                        if(localStorage.getItem("mi_perfil") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleSubir}>Subir</li>
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
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleSubir}>Subir</li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Peliculas flag={this.updateFlagPelicula} />
                                    </div>
                                )
                            }
                        else if(localStorage.getItem("peliculasFavoritas") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleSubir}>Subir</li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Peliculas_Favoritas flag={this.updateFlagPelicula} />
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
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleSubir}>Subir</li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Series flag={this.updateFlagSerie} />
                                    </div>
                                )
                            }
                        else if(localStorage.getItem("seriesFavoritas") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleSubir}>Subir</li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        < Series_Favoritas flag={this.updateFlagSerie} />
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
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleSubir}>Subir</li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Info_Pelicula nombre={localStorage.getItem("pelicula")} url={localStorage.getItem("url")} fecha={localStorage.getItem("fecha")} />
                                    </div>
                                )
                            }
                        else if(localStorage.getItem("infoSerie") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleSubir}>Subir</li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Info_Serie nombre={localStorage.getItem("serie")} url={localStorage.getItem("url")} temporada={localStorage.getItem("temporada")} />
                                    </div>
                                )
                            }
                        else if(localStorage.getItem("subir") == "1")
                            {
                                return(
                                    <div>
                                        <h1 align="center">El Club de la Película</h1>
                                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                                        <header>
                                            <nav className="menu">
                                                <ul>
                                                    <li>
                                                        Películas
                                                        <ul>
                                                            <li onClick={this.handlePeliculas}>Películas</li>
                                                            <li onClick={this.handlePeliculasFavoritas}>Películas Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Series
                                                        <ul>
                                                            <li onClick={this.handleSeries}>Series</li>
                                                            <li onClick={this.handleSeriesFavoritas}>Series Favoritas</li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={this.handleSubir}>Subir</li>
                                                    <li onClick={this.handleMiPerfil}>Mi Perfil</li>
                                                    <li onClick={this.handleCerrarSesion}>Cerrar Sesión</li>
                                                </ul>
                                            </nav>
                                        </header>
                                        <Subir />
                                    </div>
                                )
                            }
                    }
            }
    }

export default Inicio