import React from 'react'
import './pelicula.css'

class Info_Pelicula extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <h1 align="center">{this.props.nombre} - {this.props.fecha}</h1><br /><br />
                        <div align="center" className="principal">
                            <img src={this.props.url}/>
                        </div>
                        <br />
                        <input type="button" value="Añadir a Favoritos" />
                    </div>
                )
            }
    }

export default Info_Pelicula