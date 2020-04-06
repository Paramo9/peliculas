import React from 'react'
import {Redirect} from 'react-router-dom'
import firebase from 'firebase'
import {dbconfig} from './Config'

class Login extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {email: '', password: '', r1: false, r2: false}
                this.handleChangeEmail = this.handleChangeEmail.bind(this)
                this.handleChangePassword = this.handleChangePassword.bind(this)
                this.handleSubmit = this.handleSubmit.bind(this)
                this.app = firebase.initializeApp(dbconfig)
                this.usuarios = this.app.database().ref().child('usuarios')
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
                alert(this.usuarios)
            }

        render()
            {
                if(this.state.r1)
                    {
                        return <Redirect to={"/login_incorrecto"} />
                    }
                if(this.state.r2)
                    {
                        return <Redirect to={"/inicio"} />
                    }
                return(
                    <div>
                        <h1 align="center">Películas Páramo</h1><br />
                        <h2 align="center">Inicia Sesión</h2><br />
                        <form onSubmit={this.handleSubmit}>
                            <div align="center">
                                <h3>
                                    Correo electrónico:<br /><br />
                                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail} /><br /><br />
                                    Contraseña:<br />
                                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
                                    <input type="submit" value="Ingresar" /><br /><br />
                                </h3>
                            </div>
                        </form>
                    </div>
                )
            }
    }

export default Login