import React from 'react'
import './pelicula.css'

class Pelicula extends React.Component
    {
        render()
            {
                return(
                    <div className="pelicula">
                        <img src={this.props.url} width="400" height="600"/>
                        <label>{this.props.nombre}</label>
                        <label>{this.props.fecha}</label>
                    </div>
                )
            }
    }

export default Pelicula