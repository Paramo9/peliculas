import React from 'react'
import './pelicula.css'
import firebase from 'firebase'

class Info_Serie extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {favorita: 0, mensajeBoton: "Añadir a favoritas", seriesFavoritas: 0, serie: ""}
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

        handleFavoritos(event)
            {
                event.preventDefault();
                var app = firebase.app("firestore")
                if(this.state.favorita==0)
                    {
                        app.firestore().collection('usuarios').get().then(async (data) => {
                            data.forEach(async (doc) => {
                                var emailf = doc.get("email")
                                if(localStorage.getItem("email") == emailf)
                                    {
                                        await doc.ref.collection("seriesFavoritas").get().then((data2) => {
                                            this.setState({seriesFavoritas: data2.size})
                                        })
                                        await doc.ref.collection("seriesFavoritas").doc((+this.state.seriesFavoritas + 1).toString()).set({nombre: this.props.nombre, temporada: this.props.temporada, url: this.props.url})
                                        alert("¡Esta serie se ha añadido a tus series favoritas!")
                                        this.setState({favorita: 1, mensajeBoton: "Eliminar de favoritas"})
                                    }
                            })
                        })
                    }
                else
                    {
                        app.firestore().collection("usuarios").get().then((data) => {
                            data.forEach(async (doc) => {
                                var emailf = doc.get("email")
                                if(localStorage.getItem("email") == emailf)
                                    {
                                        await doc.ref.collection("seriesFavoritas").get().then((data2) => {
                                            data2.forEach((doc2) => {
                                                var nombref = doc2.get("nombre")
                                                var temporadaf = doc2.get("temporada")
                                                if(this.props.nombre==nombref && this.props.temporada==temporadaf)
                                                    {
                                                        this.setState({serie: doc2.id})
                                                        doc2.ref.delete()
                                                        alert("¡Esta serie se ha eliminado de tus series favoritas!")
                                                        this.setState({favorita: 0, mensajeBoton: "Añadir a favoritass"})
                                                    }
                                            })
                                        })
                                        await doc.ref.collection("seriesFavoritas").get().then((data2) => {
                                            data2.forEach(async (doc2) => {
                                                if(parseInt(doc2.id)>parseInt(this.state.serie))
                                                    {
                                                        var nombre = doc2.get("nombre")
                                                        var temporada = doc2.get("temporada")
                                                        var url = doc2.get("url")
                                                        var id = parseInt(doc2.id) - 1
                                                        await doc2.ref.delete()
                                                        await doc.ref.collection("seriesFavoritas").doc(id.toString()).set({nombre: nombre, temporada: temporada, url: url})
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
                            <input type="button" value={this.state.mensajeBoton} onClick={this.handleFavoritos} />
                        </div>
                    </div>
                )
            }
    }

export default Info_Serie