import React from 'react'
import firebase from 'firebase'
import Pelicula from './Pelicula'
import './pelicula.css'

class Peliculas extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {pagina: localStorage.getItem("paginaPeliculas"), peliculas: [], maxPaginas: 0, listo: 0}
                this.anterior = this.anterior.bind(this)
                this.siguiente = this.siguiente.bind(this)
                this.updateFlag = this.updateFlag
            }
        
        updateFlag = (text) => {this.props.flag(text)}

        async componentDidMount()
            {
                this.setState({listo: 0})
                var app = firebase.app("firestore")
                await app.firestore().collection("peliculas").get().then(async (data) => {
                    if(data.size%20>0)
                        {
                            this.setState({maxPaginas: +Math.trunc(data.size/20) + 1})
                        }
                    else
                        {
                            this.setState({maxPaginas: data.size/20})
                        }
                    for(let i = data.size-(20*(this.state.pagina - 1)); i>data.size-(20*(this.state.pagina - 1))-20; i--)
                        {
                            if(i>0)
                                {
                                    await app.firestore().collection("peliculas").doc(i.toString()).get().then(async (data) => {
                                        var nombre = await data.get("nombre") + " - " + data.get("fecha") + ".jpg"
                                        await app.storage().ref("Portadas").child(nombre.toString()).getDownloadURL().then(async (datos) => {
                                            this.setState({peliculas: this.state.peliculas.concat([<Pelicula flag2={this.updateFlag} url={datos} nombre={data.get("nombre")} fecha={data.get("fecha")} />])})
                                        })
                                    })
                                }
                        }
                })
                this.setState({listo: 1})
            }

        async anterior(event)
            {
                event.preventDefault();
                if(this.state.pagina!=1 && this.state.listo==1)
                    {
                        this.setState({listo: 0})
                        await this.setState({peliculas: [], pagina: +this.state.pagina - 1})
                        var app = firebase.app("firestore")
                        await app.firestore().collection("peliculas").get().then(async (data) => {
                            for(let i = data.size-(20*(this.state.pagina - 1)); i>data.size-(20*(this.state.pagina - 1))-20; i--)
                                {
                                    if(i>0)
                                        {
                                            await app.firestore().collection("peliculas").doc(i.toString()).get().then(async (data) => {
                                                var nombre = await data.get("nombre") + " - " + data.get("fecha") + ".jpg"
                                                await app.storage().ref("Portadas").child(nombre.toString()).getDownloadURL().then(async (datos) => {
                                                    this.setState({peliculas: this.state.peliculas.concat([<Pelicula flag2={this.updateFlag} url={datos} nombre={data.get("nombre")} fecha={data.get("fecha")} />])})
                                                })
                                            })
                                        }
                                }
                        })
                        this.setState({listo: 1})
                    }
            }

        async siguiente(event)
            {
                event.preventDefault();
                if(this.state.pagina!=this.state.maxPaginas && this.state.listo==1)
                    {
                        this.setState({listo: 0})
                        await this.setState({peliculas: [], pagina: +this.state.pagina + 1})
                        var app = firebase.app("firestore")
                        await app.firestore().collection("peliculas").get().then(async (data) => {
                            for(let i = data.size-(20*(this.state.pagina - 1)); i>data.size-(20*(this.state.pagina - 1))-20; i--)
                                {
                                    if(i>0)
                                        {
                                            await app.firestore().collection("peliculas").doc(i.toString()).get().then(async (data) => {
                                                var nombre = await data.get("nombre") + " - " + data.get("fecha") + ".jpg"
                                                await app.storage().ref("Portadas").child(nombre.toString()).getDownloadURL().then(async (datos) => {
                                                    this.setState({peliculas: this.state.peliculas.concat([<Pelicula flag2={this.updateFlag} url={datos} nombre={data.get("nombre")} fecha={data.get("fecha")} />])})
                                                })
                                            })
                                        }
                                }
                        })
                        this.setState({listo: 1})
                    }
            }

        showBotones = (pagina) => {
            let botones = []
            botones.push()
            if(this.state.maxPaginas!=1)
                {
                    if(this.state.maxPaginas==2)
                        {
                            if(pagina==this.state.maxPaginas)
                                {
                                    botones.push(<span>&lt;&lt;</span>)
                                }
                            else
                                {
                                    botones.push(<span>&gt;&gt;</span>)
                                }
                        }
                }
            return botones
        }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Películas</h1>
                        <div id="contenido" align="center">
                            {this.state.peliculas}
                            <div className="clear"></div>
                            <br />
                            <div className="botones">
                                {this.showBotones(this.state.pagina)}
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Peliculas