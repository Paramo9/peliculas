import React from 'react'
import './pelicula.css'

class Pelicula extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.handleClick = this.handleClick.bind(this)
            }
        
        handleClick(event)
            {
                event.preventDefault();
                localStorage.setItem("infoPelicula", "1")
                this.props.flag2(1)
            }

        render()
            {
                return(
                    <div className="pelicula" align="center">
                        <div className="poster" align="center">
                            <img src={this.props.url} onClick={this.handleClick} />
                            <h2 onClick={this.handleClick}>{this.props.nombre} - {this.props.fecha}</h2>
                        </div>
                    </div>
                )
            }
    }

export default Pelicula