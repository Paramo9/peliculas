import React from 'react'
import firebase from 'firebase'
import Pelicula from './Pelicula'
import './pelicula.css'

class Peliculas extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {pagina: 1}
            }

        mostrarpeliculas = () => {
            let peliculas = []
            let numPeliculas = 0
            peliculas.push()
            var app = firebase.app("firestore")
            app.firestore().collection("peliculas").get().then((data) => {
                alert(data.size)
            })
            for(let i = numPeliculas-(20*(this.state.pagina - 1)); i>numPeliculas-(20*(this.state.pagina - 1))-20; i--)
                {
                    app.firestore().collection("peliculas").doc(i.toString()).get().then((data) => {
                        peliculas.push(<Pelicula url="1" nombre={data.get("nombre")} fecha={data.get("fecha")} />)
                    })
                }
            return peliculas
        }

        render()
            {
                return(
                    <div id="contenido">
                        <h1 align="center">Películas</h1>
                        {this.mostrarpeliculas()}
                    </div>
                )
            }
    }

export default Peliculas