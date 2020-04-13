import React from 'react'
import './pelicula.css'
import firebase from 'firebase'

class Info_Serie extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {favorita: 0, mensajeBoton: "Añadir a favoritas"}
                this.handleFavoritos = this.handleFavoritos.bind(this)
            }

        componentDidMount()
            {
                var app = firebase.app("firestore")
                app.firestore().collection("usuarios").get().then((data) => {
                    data.forEach((doc) => {
                        var emailf = doc.get("email")
                        if(localStorage.getItem("email") == emailf)
                            {
                                doc.ref.collection("seriesFavoritas").get().then((data2) => {
                                    data2.forEach((doc2) => {
                                        var nombref = doc2.get("nombre")
                                        var temporadaf = doc2.get("temporada")
                                        if(this.props.nombre==nombref && this.props.temporada==temporadaf)
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
                                        doc.ref.collection("seriesFavoritas").add({nombre: this.props.nombre, temporada: this.props.temporada, url: this.props.url})
                                        alert("¡Esta serie se ha añadido a tus series favoritas!")
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
                                        doc.ref.collection("seriesFavoritas").get().then((data2) => {
                                            data2.forEach((doc2) => {
                                                var nombref = doc2.get("nombre")
                                                var temporadaf = doc2.get("temporada")
                                                if(this.props.nombre==nombref && this.props.temporada==temporadaf)
                                                    {
                                                        doc2.ref.delete()
                                                        alert("¡Esta serie se ha eliminado de tus series favoritas!")
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
                        <h1 align="center">{this.props.nombre} - Temporada - {this.props.temporada}</h1><br /><br />
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

export default Info_Serie