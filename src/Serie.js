import React from 'react'
import './pelicula.css'

class Serie extends React.Component
    {
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