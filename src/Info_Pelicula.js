import React from 'react'

class Info_Pelicula extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <h1 align="center">{this.props.nombre}</h1>
                    </div>
                )
            }
    }

export default Info_Pelicula