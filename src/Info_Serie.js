import React from 'react'

class Info_Serie extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <h1 align="center">{this.props.nombre} - Temporada - {this.props.temporada}</h1><br /><br />
                        <div align="center">
                            <img src={this.props.url} width="25%" />
                        </div>
                    </div>
                )
            }
    }

export default Info_Serie