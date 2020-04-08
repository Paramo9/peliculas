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
                this.state = {email: '', password: '', name: '', r1: false}
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
                            alert("Lo setimos, ese e-mail ya está registrado.")
                        }
                    else
                        {
                            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(emailRegex.test(this.state.email))
                                {
                                    app.firestore().collection('usuarios').add({email: this.state.email, nombre: this.state.name, nivel: "usuario", password: this.state.password})
                                    alert("¡Te has registrado con éxito!")
                                }
                            else
                                {
                                    alert("Ingresa un e-mail válido")
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
                        <div className="wrapper fadeInDown">
                            <div id="formContent">
                                <h2 align="center">Registro</h2><br />
                                <form onSubmit={this.handleSubmit}>
                                    <div align="center">
                                        <h3>
                                            <input className="fadeIn second" placeholder="E-mail" type="text" value={this.state.email} onChange={this.handleChangeEmail} /><br /><br />
                                            <input className="fadeIn third" placeholder="Nombre" type="text" value={this.state.name} onChange={this.handleChangeName} /><br /><br />
                                            <input className="fadeIn fourth" placeholder="Contraseña" type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
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