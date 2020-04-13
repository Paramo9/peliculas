import React from 'react'
import './pelicula.css'
import firebase from 'firebase'

class Info_Pelicula extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {favorita: 0, mensajeBoton: "Añadir a favoritas"}
                this.hanldeFavoritos = this.hanldeFavoritos.bind(this)
            }

        componentDidMount()
            {
                var app = firebase.app("firestore")
                app.firestore().collection("usuarios").get().then((data) => {
                    data.forEach((doc) => {
                        var emailf = doc.get("email")
                        if(localStorage.getItem("email") == emailf)
                            {
                                doc.ref.collection("peliculasFavoritas").get().then((data2) => {
                                    data2.forEach((doc2) => {
                                        var nombref = doc2.get("nombre")
                                        var fechaf = doc2.get("fecha")
                                        if(this.props.nombre==nombref && this.props.fecha==fechaf)
                                            {
                                                this.setState({favorita: 1, mensajeBoton: "Eliminar de favoritas"})
                                            }
                                    })
                                })
                            }
                    })
                })
            }

        hanldeFavoritos(event)
            {
                event.preventDefault();
                var app = firebase.app("firestore")
                if(this.state.favorita==0)
                    {
                        app.firestore().collection('usuarios').get().then((data) => {
                            data.forEach((doc) => {
                                var emailf = doc.get("email")
                                if(localStorage.getItem("email") == emailf)
                                    {
                                        doc.ref.collection("peliculasFavoritas").add({nombre: this.props.nombre, fecha: this.props.fecha, url: this.props.url})
                                        alert("¡Esta película se ha añadido a tus películas favoritas!")
                                        this.setState({favorita: 1, mensajeBoton: "Eliminar de favoritas"})
                                    }
                            })
                        })
                    }
                else
                    {
                        app.firestore().collection("usuarios").get().then((data) => {
                            data.forEach((doc) => {
                                var emailf = doc.get("email")
                                if(localStorage.getItem("email") == emailf)
                                    {
                                        doc.ref.collection("peliculasFavoritas").get().then((data2) => {
                                            data2.forEach((doc2) => {
                                                var nombref = doc2.get("nombre")
                                                var fechaf = doc2.get("fecha")
                                                if(this.props.nombre==nombref && this.props.fecha==fechaf)
                                                    {
                                                        doc2.ref.delete()
                                                        alert("¡Esta película se ha eliminado de tus peliculas favoritas!")
                                                        this.setState({favorita: 0, mensajeBoton: "Añadir a favoritass"})
                                                    }
                                            })
                                        })
                                    }
                            })
                        })
                    }
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">{this.props.nombre} - {this.props.fecha}</h1><br /><br />
                        <div align="center" className="principal">
                            <img src={this.props.url}/>
                        </div>
                        <br />
                        <div align="center">
                            <input type="button" value={this.state.mensajeBoton} onClick={this.hanldeFavoritos} />
                        </div>
                    </div>
                )
            }
    }

export default Info_Pelicula