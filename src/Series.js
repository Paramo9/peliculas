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
                this.handleClick = this.handleClick.bind(this)
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

        async handleClick(event)
            {
                event.preventDefault();
                if(this.state.listo==1 && parseInt(event.target.getAttribute("value"))!=this.state.pagina)
                    {
                        this.setState({listo: 0})
                        this.setState({series: [], pagina: parseInt(event.target.getAttribute("value"))})
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

        showBotones = (pagina) => {
            let botones = []
            botones.push()
            if(this.state.maxPaginas!=1)
                {
                    if(this.state.maxPaginas==2)
                        {
                            if(pagina==this.state.maxPaginas)
                                {
                                    botones.push(<span onClick={this.anterior}>&lt;&lt;</span>)
                                }
                            else
                                {
                                    botones.push(<span onClick={this.siguiente}>&gt;&gt;</span>)
                                }
                        }
                    else if(this.state.maxPaginas>2 && this.state.maxPaginas<10)
                        {
                            if(pagina==1)
                                {
                                    for(let i=1; i<=this.state.maxPaginas; i++)
                                        {
                                            botones.push(<span value={i} onClick={this.handleClick}>{i}</span>)
                                        }
                                    botones.push(<span onClick={this.siguiente}>&gt;&gt;</span>)
                                }
                            else if(pagina==this.state.maxPaginas)
                                {
                                    botones.push(<span onClick={this.anterior}>&lt;&lt;</span>)
                                    for(let i=1; i<=this.state.maxPaginas; i++)
                                        {
                                            botones.push(<span value={i} onClick={this.handleClick}>{i}</span>)
                                        }
                                }
                            else
                                {
                                    botones.push(<span onClick={this.anterior}>&lt;&lt;</span>)
                                    for(let i=1; i<=this.state.maxPaginas; i++)
                                        {
                                            botones.push(<span value={i} onClick={this.handleClick}>{i}</span>)
                                        }
                                    botones.push(<span onClick={this.siguiente}>&gt;&gt;</span>)
                                }
                        }
                }
            return botones
        }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Series</h1>
                        <div id="contenido" align="center">
                            {this.state.series}
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

export default Series