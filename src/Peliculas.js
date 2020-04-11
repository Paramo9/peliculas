import React from 'react'
import firebase from 'firebase'
import Pelicula from './Pelicula'
import './pelicula.css'

class Peliculas extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {pagina: 1, peliculas: []}
            }

        componentDidMount(){
            var app = firebase.app("firestore")
            app.firestore().collection("peliculas").get().then((data) => {
                for(let i = data.size-(20*(this.state.pagina - 1)); i>data.size-(20*(this.state.pagina - 1))-20; i--)
                    {
                        if(i>0)
                            {
                                alert(this.state.peliculas.length)
                                app.firestore().collection("peliculas").doc(i.toString()).get().then((data) => {
                                    this.setState({peliculas: this.state.peliculas.push(<Pelicula url="1" nombre={data.get("nombre")} fecha={data.get("fecha")} />)})
                                })
                            }
                    }
            })
        }

        render()
            {
                return(
                    <div id="contenido">
                        <h1 align="center">Películas</h1>
                        {this.state.peliculas}
                    </div>
                )
            }
    }

export default Peliculas