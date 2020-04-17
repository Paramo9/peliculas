import React from 'react'
import firebase from 'firebase'

class Subir extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {archivos: null, peliculas: 0}
                this.handleChange = this.handleChange.bind(this)
                this.handleSubirPeliculas = this.handleSubirPeliculas.bind(this)
            }

        handleChange(event)
            {
                this.setState({archivos: event.target.files})
            }

        async handleSubirPeliculas(event)
            {
                event.preventDefault();
                if(this.state.archivos!=null)
                    {
                        var app = firebase.app("firestore")
                        for(let i=0; i<this.state.archivos.length; i++)
                            {
                                await app.storage().ref(`Portadas/${this.state.archivos[i].name}`).put(this.state.archivos[i])
                                await app.storage().ref("Portadas").child(this.state.archivos[i].name).getDownloadURL().then(async (data) => {
                                    await app.firestore().collection("peliculas").get().then(async (data2) => {
                                        this.setState({peliculas: data2.size})
                                    })
                                    var nombre = await this.state.archivos[i].name.substring(0, +this.state.archivos[i].name.length - 11)
                                    var fecha = await this.state.archivos[i].name.substring(+this.state.archivos[i].name.length - 8, +this.state.archivos[i].name.length - 4)
                                    await app.firestore().collection("peliculas").doc((+this.state.peliculas + 1).toString()).set({nombre: nombre, fecha: fecha, url: data})
                                })
                            }
                        if(this.state.archivos.length==1)
                            {
                                alert("¡La película se ha subido con éxito!")
                            }
                        else
                            {
                                alert("¡Las películas se han subido con éxito!")
                            }
                    }
            }

        mostrarArchivos = (archivos) => {
            let files = []
            files.push()
            if(archivos!=null)
                {
                    for(let i=0; i<archivos.length; i++)
                        {
                            files.push(<h3 align="center">{archivos[i].name}</h3>)
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
                                <input type="file" id="archivos" name="archivos" multiple onChange={this.handleChange} /><br /><br />
                                {this.mostrarArchivos(this.state.archivos)}
                                <input type="button" value="Subir Películas" onClick={this.handleSubirPeliculas} /><br /><br />
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Subir