import React from 'react'
import firebase from 'firebase'
import Pelicula from './Pelicula'
import './pelicula.css'

class Peliculas extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {pagina: localStorage.getItem("paginaPeliculas"), peliculas: [], numPeliculas: 0}
                this.handleAnterior = this.handleAnterior.bind(this)
                this.handleSiguiente = this.handleSiguiente.bind(this)
            }

        async componentDidMount(){
            var app = firebase.app("firestore")
            await app.firestore().collection("peliculas").get().then(async (data) => {
                this.setState({numPeliculas: data.size})
                for(let i = data.size-(20*(this.state.pagina - 1)); i>data.size-(20*(this.state.pagina - 1))-20; i--)
                    {
                        if(i>0)
                            {
                                await app.firestore().collection("peliculas").doc(i.toString()).get().then(async (data) => {
                                    var nombre = await data.get("nombre") + " - " + data.get("fecha") + ".jpg"
                                    await app.storage().ref("Portadas").child(nombre.toString()).getDownloadURL().then(async (datos) => {
                                        this.setState({peliculas: this.state.peliculas.concat([<Pelicula url={datos} nombre={data.get("nombre")} fecha={data.get("fecha")} />])})
                                    })
                                })
                            }
                    }
            })
        }

        handleAnterior(event)
            {
                event.preventDefault();
                if(this.state.pagina!=1)
                    {
                        localStorage.setItem("paginaPeliculas", +localStorage.getItem("paginaPeliculas" - +1))
                        this.forceUpdate()
                    }
            }

        handleSiguiente(event)
            {
                event.preventDefault();
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Películas</h1>
                        <div id="contenido">
                            {this.state.peliculas}
                        </div>
                        <div className="botones">
                            <input type="button" value="Anterior" className="botonAnterior" onClick={this.handleAnterior} />
                            <input type="button" value="Siguiente" className="botonSiguiente" />
                        </div>
                    </div>
                )
            }
    }

export default Peliculas