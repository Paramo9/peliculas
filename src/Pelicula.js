import React from 'react'
import './pelicula.css'

class Pelicula extends React.Component
    {
        render()
            {
                return(
                    <div className="pelicula">
                        <img src={this.props.url} width="100%" height="70%"/><br />
                        {this.props.nombre}<br />
                        {this.props.fecha}
                    </div>
                )
            }
    }

export default Pelicula