import React from 'react'
import firebase from 'firebase'
import Pelicula from './Pelicula'
import './pelicula.css'
import Cargando from './Cargando'

class Peliculas_Favoritas extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {pagina: localStorage.getItem("paginaPeliculasFavoritas"), peliculas: [], maxPaginas: 0, listo: 0}
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

        async anterior(event)
            {
                event.preventDefault();
                if(this.state.pagina!=1 && this.state.listo==1)
                    {
                        this.setState({listo: 0})
                        this.setState({peliculas: [], pagina: +this.state.pagina - 1})
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
            }

        async siguiente(event)
            {
                event.preventDefault();
                if(this.state.pagina!=1 && this.state.listo==1)
                    {
                        this.setState({listo: 0})
                        this.setState({peliculas: [], pagina: +this.state.pagina + 1})
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
            }

        async handleClick(event)
            {
                event.preventDefault();
                if(this.state.listo==1 && parseInt(event.target.getAttribute("value"))!=this.state.pagina)
                    {
                        this.setState({listo: 0})
                        this.setState({peliculas: [], pagina: parseInt(event.target.getAttribute("value"))})
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
                            <h1 align="center">Películas Favoritas</h1>
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
                            <h1 align="center">Películas Favoritas</h1>
                            <div className="clear"></div>
                            <br />
                            <h2 align="center">Página: {this.state.pagina} de {this.state.maxPaginas}</h2>
                            <div className="clear"></div>
                            <br />
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

        render()
            {
                return(
                    <div>
                        {this.showPage(this.state.listo)}
                    </div>
                )
            }
    }

export default Peliculas_Favoritas