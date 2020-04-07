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
                this.state = {email: '', password: '', r1: false, r2: false, r3: false}
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
                                this.setState({r2: true})
                            }
                    })
                    this.setState({r1: true})
                })
            }

        handleClickRegistrar(event)
            {
                event.preventDefault();
                this.setState({r3: true})
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/peliculas/login_incorrecto"} />
                    }
                if(this.state.r2)
                    {
                        return <Redirect to={"/peliculas/inicio"} />
                    }
                if(this.state.r3)
                    {
                        return <Redirect to={"/peliculas/registrar"} />
                    }
                return(
                    <div>
                        <h1 align="center">El Club de la Película</h1>
                        <div className="wrapper fadeInDown">
                            <div id="formContent">
                                <h2 align="center">Inicia Sesión</h2><br />
                                <form onSubmit={this.handleSubmit}>
                                    <div align="center">
                                        <h3>
                                            <input id="login" className="fadeIn second" name="login" placeholder="E-mail" type="text" value={this.state.email} onChange={this.handleChangeEmail} /><br /><br />
                                            <input id="password" className="fadeIn third" name="login" placeholder="Contraseña" type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
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