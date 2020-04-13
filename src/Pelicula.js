import React from 'react'
import './pelicula.css'
import { Redirect } from 'react-router-dom'

class Pelicula extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {r1: false}
                this.handleClick = this.handleClick.bind(this)
            }
        
        handleClick(event)
            {
                event.preventDefault();
                alert("entra")
                localStorage.setItem("infoPelicula", "1")
                this.forceUpdate()
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/peliculas/inicio"} />
                    }
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