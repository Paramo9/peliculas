import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import firebase from 'firebase'
import {dbconfig} from './Config'
import './login.css'


class Login extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {email: '', password: '', r2: false, r3: false, mensajeError: ""}
                this.handleChangeEmail = this.handleChangeEmail.bind(this)
                this.handleChangePassword = this.handleChangePassword.bind(this)
                this.handleSubmit = this.handleSubmit.bind(this)
                this.handleClickRegistrar = this.handleClickRegistrar.bind(this)
            }

        handleChangeEmail(event)
            {
                this.setState({email: event.target.value})
            }

        handleChangePassword(event)
            {
                this.setState({password: event.target.value})
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
                    data.forEach((doc) => {
                        var emaili = doc.get('email')
                        var passwordi = doc.get('password')
                        var nombrei = doc.get('nombre')
                        var niveli = doc.get('nivel')
                        if(emaili == this.state.email && passwordi == this.state.password)
                            {
                                localStorage.setItem("nombre", nombrei)
                                localStorage.setItem("password", passwordi)
                                localStorage.setItem("email", emaili)
                                localStorage.setItem("nivel", niveli)
                                localStorage.setItem("mi_perfil", "0")
                                localStorage.setItem("peliculas", "0")
                                localStorage.setItem("series", "0")
                                localStorage.setItem("favoritas", "0")
                                this.setState({r2: true})
                            }
                    })
                    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(emailRegex.test(this.state.email))
                        {
                            document.getElementById("errorLogin").style.visibility = "visible"
                            this.setState({mensajeError: "*Las credenciales no son válidas"})
                        }
                    else
                        {
                            document.getElementById("errorLogin").style.visibility = "visible"
                            this.setState({mensajeError: "*Ingresa un e-mail válido."})
                        }
                })
            }

        handleClickRegistrar(event)
            {
                event.preventDefault();
                this.setState({r3: true})
            }

        render()
            {
                if(this.state.r2)
                    {
                        return <Redirect to={"/peliculas/inicio"} />
                    }
                if(this.state.r3)
                    {
                        return <Redirect to={"/peliculas/registro"} />
                    }
                return(
                    <div>
                        <h1 align="center">El Club de la Película</h1>
                        <h2 align="center">La primer regla del Club de la Película es no hablar del Club de la Película</h2>
                        <div className="wrapper fadeInDown">
                            <div id="formContent">
                                <h2 align="center">Inicia Sesión</h2><br />
                                <form onSubmit={this.handleSubmit}>
                                    <div align="center">
                                        <h3>
                                            <input id="login" required className="fadeIn second" name="login" placeholder="E-mail" type="text" value={this.state.email} onChange={this.handleChangeEmail} /><br /><br />
                                            <input id="password" required className="fadeIn third" name="login" placeholder="Contraseña" type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
                                            <label id="errorLogin" style={{visibility: "hidden", color: "red"}} >{this.state.mensajeError}</label>
                                            <br />
                                            <br />
                                            <input type="submit" value="Ingresar" className="fadeIn fourth" /><br /><br />
                                        </h3>
                                    </div>
                                </form>
                                <div id="formFooter">
                                    <h3 align="center" className="astyle underlineHover" onClick={this.handleClickRegistrar}>Regístrate aquí</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Login