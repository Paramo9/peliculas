import React from 'react'
import './pelicula.css'

class Pelicula extends React.Component
    {
        render()
            {
                return(
                    <div className="pelicula">
                        <div className="poster">
                            <img src={this.props.url} />
                            <h3>{this.props.nombre} - {this.props.fecha}</h3>
                        </div>
                    </div>
                )
            }
    }

export default Pelicula