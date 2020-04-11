import React from 'react'
import './pelicula.css'

class Pelicula extends React.Component
    {
        render()
            {
                return(
                    <div className="pelicula">
                        <img src={this.props.url} width="260" height="400"/><br />
                        <label>{this.props.nombre}</label><br />
                        <label>{this.props.fecha}</label>
                    </div>
                )
            }
    }

export default Pelicula