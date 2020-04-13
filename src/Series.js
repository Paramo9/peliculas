import React from 'react'
import firebase from 'firebase'
import Serie from './Serie'
import './pelicula.css'

class Series extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {pagina: localStorage.getItem("paginaSeries"), series: [], maxPaginas: 0, listo: 0}
                this.anterior = this.anterior.bind(this)
                this.siguiente = this.siguiente.bind(this)
                this.updateFlag = this.updateFlag
            }

        updateFlag = (text) => {this.props.flag(text)}

        async componentDidMount()
            {
                this.setState({listo: 0})
                var app = firebase.app("firestore")
                await app.firestore().collection("series").get().then(async (data) => {
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
                                    await app.firestore().collection("series").doc(i.toString()).get().then(async (data) => {
                                        var nombre = await data.get("nombre") + " - Temporada " + data.get("temporada") + ".jpg"
                                        await app.storage().ref("Series").child(nombre.toString()).getDownloadURL().then(async (datos) => {
                                            this.setState({series: this.state.series.concat([<Serie flag2={this.updateFlag} url={datos} nombre={data.get("nombre")} temporada={data.get("temporada")} />])})
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
                        await this.setState({series: [], pagina: +this.state.pagina - 1})
                        var app = firebase.app("firestore")
                        await app.firestore().collection("series").get().then(async (data) => {
                            for(let i = data.size-(20*(this.state.pagina - 1)); i>data.size-(20*(this.state.pagina - 1))-20; i--)
                                {
                                    if(i>0)
                                        {
                                            await app.firestore().collection("series").doc(i.toString()).get().then(async (data) => {
                                                var nombre = await data.get("nombre") + " - Temporada " + data.get("temporada") + ".jpg"
                                                await app.storage().ref("Series").child(nombre.toString()).getDownloadURL().then(async (datos) => {
                                                    this.setState({series: this.state.series.concat([<Serie flag2={this.updateFlag} url={datos} nombre={data.get("nombre")} temporada={data.get("temporada")} />])})
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
                        await this.setState({series: [], pagina: +this.state.pagina + 1})
                        var app = firebase.app("firestore")
                        await app.firestore().collection("series").get().then(async (data) => {
                            for(let i = data.size-(20*(this.state.pagina - 1)); i>data.size-(20*(this.state.pagina - 1))-20; i--)
                                {
                                    if(i>0)
                                        {
                                            await app.firestore().collection("series").doc(i.toString()).get().then(async (data) => {
                                                var nombre = await data.get("nombre") + " - Temporada " + data.get("temporada") + ".jpg"
                                                await app.storage().ref("Series").child(nombre.toString()).getDownloadURL().then(async (datos) => {
                                                    this.setState({series: this.state.series.concat([<Serie flag2={this.updateFlag} url={datos} nombre={data.get("nombre")} temporada={data.get("temporada")} />])})
                                                })
                                            })
                                        }
                                }
                        })
                        this.setState({listo: 1})
                    }
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Series</h1>
                        <div id="contenido">
                            {this.state.series}
                            <div className="clear"></div>
                            <br />
                            <div className="botones">
                                <span className="izquierdo" onClick={this.anterior}>Anterior</span>
                                <span className="derecho" onClick={this.siguiente}>Siguiente</span>
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Series