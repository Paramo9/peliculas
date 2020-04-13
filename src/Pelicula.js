import React from 'react'
import './pelicula.css'

class Pelicula extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.handleClick = this.handleClick.bind(this)
            }
        
        handleClick(event)
            {
                event.preventDefault();
                localStorage.setItem("infoPelicula", "1")
                localStorage.setItem("peliculas", "0")
                localStorage.setItem("peliculasFavoritas", "0")
                localStorage.setItem("pelicula", this.props.nombre)
                localStorage.setItem("fecha", this.props.fecha)
                localStorage.setItem("url", this.props.url)
                this.props.flag2(1)
            }

        render()
            {
                return(
                    <div className="pelicula" align="center">
                        <div className="poster" align="center">
                            <img src={this.props.url} onClick={this.handleClick} />
                            <h2 onClick={this.handleClick}>{this.props.nombre} - {this.props.fecha}</h2>
                        </div>
                    </div>
                )
            }
    }

export default Pelicula