import React from 'react'
import firebase from 'firebase'
import Pelicula from './Pelicula'
import './pelicula.css'

class Peliculas_Favoritas extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {pagina: localStorage.getItem("paginaPeliculasFavoritas"), peliculas: [], maxPaginas: 0, listo: 0}
                //this.anterior = this.anterior.bind(this)
                //this.siguiente = this.siguiente.bind(this)
                this.updateFlag = this.updateFlag
            }

        updateFlag = (text) => {this.props.flag(text)}

        async componentDidMount()
            {
                this.setState({listo: 0})
                var app = firebase.app("firestore")
                await app.firestore().collection("usuarios").get().then(async (data) => {
                    data.forEach(async (doc) => {
                        var emailf = doc.get("email")
                        if(localStorage.getItem("email")==emailf)
                            {
                                await doc.ref.collection("peliculasFavoritas").get().then(async (data2) => {
                                    if(data2.size%20>0)
                                        {
                                            this.setState({maxPaginas: +Math.trunc(data2.size/20) + 1})
                                        }
                                    else
                                        {
                                            this.setState({maxPaginas: data2.size/20})
                                        }
                                    for(let i = data2.size-(20*(this.state.pagina - 1)); i>data2.size-(20*(this.state.pagina - 1))-20; i--)
                                        {
                                            if(i>0)
                                                {
                                                    await doc.ref.collection("peliculasFavoritas").doc(i.toString()).get().then(async (data3) => {
                                                        this.setState({peliculas: this.state.peliculas.concat([<Pelicula flag2={this.updateFlag} url={data3.get("url")} nombre={data3.get("nombre")} fecha={data3.get("fecha")} />])})
                                                    })
                                                }
                                        }
                                })
                            }
                    })
                })
                this.setState({listo: 1})
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Películas Favoritas</h1>
                        <div id="contenido" align="center">
                            {this.state.peliculas}
                            <div className="clear"></div>
                            <br />
                        </div>
                    </div>
                )
            }
    }

export default Peliculas_Favoritas