import React from 'react'
import firebase from 'firebase'
import {dbconfig} from './Config'
import Pelicula from './Pelicula'

class Peliculas extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {link: "", name: "", year: ""}
            }
        
        componentDidMount()
            {
                var app = firebase.app("firestore")
                app.storage().ref("Portadas").child("Toy Story 4 - 2019.jpg").getDownloadURL().then((url) => {
                    this.setState({link: url})
                })
                app.firestore().collection('peliculas').get().then((data) => {
                    data.forEach((doc) => {
                        var nombre = doc.get("nombre")
                        var fecha = doc.get("fecha")
                        this.setState({name: nombre, year: fecha})
                    })
                })
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Películas</h1>
                        <Pelicula url={this.state.link} nombre={this.state.name} fecha={this.state.year} />
                    </div>
                )
            }
    }

export default Peliculas