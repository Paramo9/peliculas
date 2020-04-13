import React from 'react'
import './pelicula.css'
import firebase from 'firebase'

class Info_Pelicula extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.hanldeFavoritos = this.hanldeFavoritos.bind(this)
            }

        hanldeFavoritos(event)
            {
                event.preventDefault();
                var app = firebase.app("firestore")
                app.firestore().collection('usuarios').get().then((data) => {
                    data.forEach((doc) => {
                        var emailf = doc.get("email")
                        if(localStorage.getItem("email") == emailf)
                            {
                                doc.ref.collection("peliculasFavoritas").add({nombre: this.props.nombre, fecha: this.props.fecha, url: this.props.url})
                                alert("¡Esta película se ha añadido a tus películas favoritas!")
                            }
                    })
                })
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
                            <input type="button" value="Añadir a Favoritos" onClick={this.hanldeFavoritos} />
                        </div>
                    </div>
                )
            }
    }

export default Info_Pelicula