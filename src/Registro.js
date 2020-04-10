import React from 'react'
import './registrar.css'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase'
import {dbconfig} from './Config'

class Registro extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {email: '', password: '', name: '', r1: false, errorEmailR: "", errorNombreR: "", errorPasswordR: ""}
                this.handleChangeEmail = this.handleChangeEmail.bind(this)
                this.handleChangePassword = this.handleChangePassword.bind(this)
                this.handleChangeName = this.handleChangeName.bind(this)
                this.handleSubmit = this.handleSubmit.bind(this)
                this.handleClickRegresar = this.handleClickRegresar.bind(this)
            }

        handleChangeEmail(event)
            {
                this.setState({email: event.target.value})
            }

        handleChangePassword(event)
            {
                this.setState({password: event.target.value})
            }

        handleChangeName(event)
            {
                this.setState({name: event.target.value})
            }
        
        handleSubmit(event)
            {
                event.preventDefault();
                if(!firebase.apps.length)
                    {
                        var app = firebase.initializeApp(dbconfig, "firestore")
                    }
                else
                    {
                        var app= firebase.app("firestore")
                    }
                app.firestore().collection('usuarios').get().then((data) => {
                    var t = 0
                    data.forEach((doc) => {
                        var emailf = doc.get('email')
                        if(emailf == this.state.email)
                            {
                                t = 1
                            }
                    })
                if(t==1)
                    {
                        document.getElementById("ErrorEmail").style.visibility = "visible"
                        this.setState({errorEmailR: "*Este e-mail ya está registrado."})
                    }
                else
                    {
                        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if(!emailRegex.test(this.state.email) || this.state.password.length<8 || this.state.password.length>12 || this.state.name.includes(" ") || this.state.name.length>20)
                            {
                                if(!emailRegex.test(this.state.email))
                                    {
                                        document.getElementById("ErrorEmail").style.visibility = "visible"
                                        this.setState({errorEmailR: "*Ingresa un e-mail válido"})
                                    }
                                else
                                    {
                                        document.getElementById("ErrorEmail").style.visibility = "hidden"
                                        this.setState({errorEmailR: ""})
                                    }
                                if(this.state.name.includes(" "))
                                    {
                                        document.getElementById("ErrorName").style.visibility = "visible"
                                        this.setState({errorNombreR: "*El nombre no puede contener espacios."})
                                    }
                                else if(this.state.name.length>21)
                                    {
                                        document.getElementById("ErrorName").style.visibility = "visible"
                                        this.setState({errorNombreR: "*El nombre no puede tener más de 20 caracteres."})
                                    }
                                else
                                    {
                                        document.getElementById("ErrorName").style.visibility = "hidden"
                                        this.setState({errorNombreR: ""})
                                    }
                                if(this.state.password.length<8 || this.state.password.length>12)
                                    {
                                        document.getElementById("ErrorPassword").style.visibility = "visible"
                                        this.setState({errorPasswordR: "*La contraseña debe tener entre 8 y 12 caracteres."})
                                    }
                                else
                                    {
                                        document.getElementById("ErrorPassword").style.visibility = "hidden"
                                        this.setState({errorPasswordR: ""})
                                    }
                            }
                        else
                            {
                                app.firestore().collection('usuarios').add({email: this.state.email, nombre: this.state.name, nivel: "usuario", password: this.state.password})
                                alert("¡Te has registrado con éxito!")
                            }
                    }
                })
            }
        
        handleClickRegresar(event)
            {
                event.preventDefault();
                this.setState({r1: true})
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/peliculas/login"} />
                    }
                return(
                    <div>
                        <h1 align="center">El Club de la Película</h1>
                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                        <div className="wrapper fadeInDown">
                            <div id="formContent">
                                <h2 align="center">Registro</h2><br />
                                <form onSubmit={this.handleSubmit}>
                                    <div align="center">
                                        <h3>
                                            <input className="fadeIn second" required placeholder="E-mail" type="text" value={this.state.email} onChange={this.handleChangeEmail} /><br /><br />
                                            <label id="ErrorEmail" style={{visibility: "hidden", color: "red", marginBottom: "20px"}} >{this.state.errorEmailR}</label><br />
                                            <input className="fadeIn third" required placeholder="Nombre" type="text" value={this.state.name} onChange={this.handleChangeName} /><br /><br />
                                            <label id="ErrorName" style={{visibility: "hidden", color: "red", marginBottom: "20px"}} >{this.state.errorNombreR}</label><br />
                                            <input className="fadeIn fourth" required placeholder="Contraseña" type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
                                            <label id="ErrorPassword" style={{visibility: "hidden", color: "red"}} >{this.state.errorPasswordR}</label><br />
                                            <input type="submit" value="Registrar" className="fadeIn fifth" /><br /><br />
                                            <input type="button" value="Regresar" onClick={this.handleClickRegresar} className="fadeIn sixth" /><br /><br />
                                        </h3>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Registro