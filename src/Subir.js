import React from 'react'
import firebase from 'firebase'

class Subir extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {archivos: null}
                this.handleChange = this.handleChange.bind(this)
                this.handleSubirPeliculas = this.handleSubirPeliculas.bind(this)
            }

        handleChange(event)
            {
                this.setState({archivos: event.target.files})
            }

        handleSubirPeliculas(event)
            {
                event.preventDefault();
                if(this.state.archivos!=null)
                    {
                        var app = firebase.app("firestore")
                        for(let i=0; i<this.state.archivos.length; i++)
                            {
                                const lol = i
                                alert(lol)
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