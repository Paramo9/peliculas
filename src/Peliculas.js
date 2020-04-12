import React from 'react'
import firebase from 'firebase'
import Pelicula from './Pelicula'
import './pelicula.css'

class Peliculas extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {pagina: localStorage.getItem("paginaPeliculas"), peliculas: []}
                this.borrar = this.borrar.bind(this)
            }

        async componentDidMount(){
            var app = firebase.app("firestore")
            await app.firestore().collection("peliculas").get().then(async (data) => {
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

        borrar()
            {
                this.setState({peliculas: []})
                alert("lol")
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Películas</h1>
                        <div id="contenido">
                            {this.state.peliculas}
                            <div className="clear"></div>
                            <br />
                            <div className="botones">
                                <span className="izquierdo" onClick={this.borrar()}>Anterior</span>
                                <span className="derecho">Siguiente</span>
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Peliculas