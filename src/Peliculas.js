import React from 'react'
import firebase from 'firebase'
import Pelicula from './Pelicula'
import './pelicula.css'
import Cargando from './Cargando'

class Peliculas extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {pagina: localStorage.getItem("paginaPeliculas"), peliculas: [], maxPaginas: 0, listo: 0}
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
                                    await app.firestore().collection("peliculas").doc(i.toString()).get().then(async (data2) => {
                                        this.setState({peliculas: this.state.peliculas.concat([<Pelicula flag2={this.updateFlag} url={data2.get("url")} nombre={data2.get("nombre")} fecha={data2.get("fecha")} />])})
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
                                            await app.firestore().collection("peliculas").doc(i.toString()).get().then(async (data2) => {
                                                this.setState({peliculas: this.state.peliculas.concat([<Pelicula flag2={this.updateFlag} url={data2.get("url")} nombre={data2.get("nombre")} fecha={data2.get("fecha")} />])})
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
                                            await app.firestore().collection("peliculas").doc(i.toString()).get().then(async (data2) => {
                                                this.setState({peliculas: this.state.peliculas.concat([<Pelicula flag2={this.updateFlag} url={data2.get("url")} nombre={data2.get("nombre")} fecha={data2.get("fecha")} />])})
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
                        this.setState({peliculas: [], pagina: parseInt(event.target.getAttribute("value"))})
                        var app = firebase.app("firestore")
                        await app.firestore().collection("peliculas").get().then(async (data) => {
                            for(let i = data.size-(20*(this.state.pagina - 1)); i>data.size-(20*(this.state.pagina - 1))-20; i--)
                                {
                                    if(i>0)
                                        {
                                            await app.firestore().collection("peliculas").doc(i.toString()).get().then(async (data2) => {
                                                this.setState({peliculas: this.state.peliculas.concat([<Pelicula flag2={this.updateFlag} url={data2.get("url")} nombre={data2.get("nombre")} fecha={data2.get("fecha")} />])})
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
            if(this.state.maxPaginas!=1 && this.state.maxPaginas!=0)
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
                    else
                        {
                            var decena = +Math.trunc(pagina/ 10)
                            botones.push(<span value="1" onClick={this.handleClick}>Primera</span>)
                            botones.push(<span onClick={this.anterior}>&lt;&lt;</span>)
                            for(let i=+decena-2; i<=decena; i++)
                                {
                                    if(i>0)
                                        {
                                            botones.push(<span value={i*10} onClick={this.handleClick}>{i*10}</span>)
                                        }
                                }
                            for(let i=1; i<=9; i++)
                                {
                                    if(+decena*10+i<=this.state.maxPaginas)
                                        {
                                            botones.push(<span value={+decena*10+i} onClick={this.handleClick}>{+decena*10+i}</span>)
                                        }
                                }
                            for(let i=+decena+1; i<=+decena+3; i++)
                                {
                                    if(i*10<=this.state.maxPaginas)
                                        {
                                            botones.push(<span value={i*10} onClick={this.handleClick}>{i*10}</span>)
                                        }
                                }
                            botones.push(<span onClick={this.siguiente}>&gt;&gt;</span>)
                            botones.push(<span value={this.state.maxPaginas} onClick={this.handleClick}>Última</span>)
                        }
                }
            return botones
        }

        showPage = (estado) => {
            if(estado==0)
                {
                    return(
                        <div>
                            <h1 align="center">Películas</h1>
                            <div className="clear"></div>
                            <br />
                            <div>
                                <Cargando />
                            </div>
                        </div>
                    )
                }
            else
                {
                    return(
                        <div>
                            <h1 align="center">Películas</h1>
                            <div className="clear"></div>
                            <br />
                            <h2 align="center">Página: {this.state.pagina} de {this.state.maxPaginas}</h2>
                            <div className="clear"></div>
                            <br />
                            <div id="caja">
                                <div id="contenido" align="center">
                                    {this.state.peliculas}
                                    <div className="clear"></div>
                                    <br />
                                    <div className="botones">
                                        {this.showBotones(this.state.pagina)}
                                    </div>
                                </div>
                                <div id="sidebar">
                                    <h3 className="titulo">Películas por año</h3>
                                </div>
                            </div>
                        </div>
                    )
                }
        }

        render()
            {
                return(
                    <div>
                        {this.showPage(this.state.listo)}
                    </div>
                )
            }
    }

export default Peliculas