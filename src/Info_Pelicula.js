import React from 'react'

class Info_Pelicula extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <h1 align="center">{this.props.nombre} - {this.props.fecha}</h1><br /><br />
                        <div align="center">
                            <img src={this.props.url} width="70%" />
                        </div>
                    </div>
                )
            }
    }

export default Info_Pelicula