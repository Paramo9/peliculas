import React from 'react'
import './pelicula.css'

class Serie extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.handleClick = this.handleClick.bind(this)
            }

        handleClick(event)
            {
                event.preventDefault();
                localStorage.setItem("infoSerie", "1")
                localStorage.setItem("series", "0")
                localStorage.setItem("serie", this.props.nombre)
                localStorage.setItem("temporada", this.props.temporada)
                localStorage.setItem("url", this.props.url)
                this.props.flag2(1)
            }

        render()
            {
                return(
                    <div className="pelicula" align="center">
                        <div className="poster" align="center">
                            <img src={this.props.url} />
                            <h2>{this.props.nombre} - Temporada {this.props.temporada}</h2>
                        </div>
                    </div>
                )
            }
    }

export default Serie