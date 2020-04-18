import React from 'react'
import firebase from 'firebase'

class Subir extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {archivosPeliculas: null, peliculas: 0, archivosSeries: null, series: 0}
                this.handleChangePeliculas = this.handleChangePeliculas.bind(this)
                this.handleSubirPeliculas = this.handleSubirPeliculas.bind(this)
                this.handleChangeSeries = this.handleChangeSeries.bind(this)
                this.handleSubirSeries = this.handleSubirSeries.bind(this)
            }

        handleChangePeliculas(event)
            {
                this.setState({archivosPeliculas: event.target.files})
            }

        handleChangeSeries(event)
            {
                this.setState({archivosSeries: event.target.files})
            }

        async handleSubirPeliculas(event)
            {
                event.preventDefault();
                if(this.state.archivosPeliculas!=null)
                    {
                        var app = firebase.app("firestore")
                        for(let i=0; i<this.state.archivosPeliculas.length; i++)
                            {
                                await app.storage().ref(`Portadas/${this.state.archivosPeliculas[i].name}`).put(this.state.archivosPeliculas[i])
                                await app.storage().ref("Portadas").child(this.state.archivosPeliculas[i].name).getDownloadURL().then(async (data) => {
                                    await app.firestore().collection("peliculas").get().then(async (data2) => {
                                        this.setState({peliculas: data2.size})
                                    })
                                    var nombre = await this.state.archivosPeliculas[i].name.substring(0, +this.state.archivosPeliculas[i].name.length - 11)
                                    var fecha = await this.state.archivosPeliculas[i].name.substring(+this.state.archivosPeliculas[i].name.length - 8, +this.state.archivosPeliculas[i].name.length - 4)
                                    await app.firestore().collection("peliculas").doc((+this.state.peliculas + 1).toString()).set({nombre: nombre, fecha: fecha, url: data})
                                })
                            }
                        if(this.state.archivosPeliculas.length==1)
                            {
                                alert("¡La película se ha subido con éxito!")
                                this.forceUpdate()
                            }
                        else
                            {
                                alert("¡Las películas se han subido con éxito!")
                                this.forceUpdate()
                            }
                    }
            }

        async handleSubirSeries(event)
            {
                event.preventDefault();
                if(this.state.archivosSeries!=null)
                    {
                        /*var app = firebase.app("firestore")
                        for(let i=0; i<this.state.archivosSeries.length; i++)
                            {
                                await app.storage().ref(`Series/${this.state.archivosSeries[i].name}`).put(this.state.archivosSeries[i])
                                await app.storage().ref("Series").child(this.state.archivosSeries[i].name).getDownloadURL().then(async (data) => {
                                    await app.firestore().collection("series").get().then(async (data2) => {
                                        this.setState({series: data2.size})
                                    })*/
                                    for(let i=0; i<this.state.archivosSeries.length; i++){
                                    var t = 0;
                                    for(let j=+this.state.archivosSeries[i].name.length-1; j>0; j--)
                                        {
                                            if(this.state.archivosSeries[i].name.charAt(j) === ' ')
                                                {
                                                    t = j
                                                    break
                                                }
                                        }
                                    var nombre = await this.state.archivosSeries[i].name.substring(0, +this.state.archivosSeries[i].name.length - +t + 1)
                                    alert(nombre)
                                    }
                                    //var temporada = await this.state.archivosSeries[i].name.substring(+this.state.archivosSeries[i].name.length - 8, +this.state.archivosSeries[i].name.length - 4)
                                    /*await app.firestore().collection("series").doc((+this.state.series + 1).toString()).set({nombre: nombre, temporada: temporada, url: data})
                                })
                            }
                        if(this.state.archivosSeries.length==1)
                            {
                                alert("¡La serie se ha subido con éxito!")
                                this.forceUpdate()
                            }
                        else
                            {
                                alert("¡Las series se han subido con éxito!")
                                this.forceUpdate()
                            }*/
                    }
            }

        mostrararchivosPeliculas = (archivosPeliculas) => {
            let files = []
            files.push()
            if(archivosPeliculas!=null)
                {
                    for(let i=0; i<archivosPeliculas.length; i++)
                        {
                            files.push(<h3 align="center">{archivosPeliculas[i].name}</h3>)
                        }
                }
            return files
        }

        mostrararchivosSeries = (archivosSeries) => {
            let files = []
            files.push()
            if(archivosSeries!=null)
                {
                    for(let i=0; i<archivosSeries.length; i++)
                        {
                            files.push(<h3 align="center">{archivosSeries[i].name}</h3>)
                        }
                }
            return files
        }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Subir</h1><br /><br />
                        <div className="wrapper">
                            <div id="formContent">
                                <h2 align="center">Subir Películas</h2>
                                <input type="file" id="archivosPeliculas" name="archivosPeliculas" multiple onChange={this.handleChangePeliculas} /><br /><br />
                                {this.mostrararchivosPeliculas(this.state.archivosPeliculas)}
                                <input type="button" value="Subir" onClick={this.handleSubirPeliculas} /><br /><br />
                            </div>
                        </div>
                        <div className="wrapper">
                            <div id="formContent">
                                <h2 align="center">Subir Series</h2>
                                <input type="file" id="archivosSeries" name="archivosSeries" multiple onChange={this.handleChangeSeries} /><br /><br />
                                {this.mostrararchivosSeries(this.state.archivosSeries)}
                                <input type="button" value="Subir" onClick={this.handleSubirSeries} /><br /><br />
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Subir