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
                var emails = []
                var passwords = []
                var nombres = []
                var niveles = []
                var i = 0
                this.app.firestore().collection('usuarios').get().then((data) => {
                    data.forEach((doc) => {
                        emails[i] = doc.get('email')
                        passwords[i] = doc.get('password')
                        nombres[i] = doc.get('nombre')
                        niveles[i] = doc.get('nivel')
                        i = i + 1
                    })
                })
                var e = 0
                var p = 0
                for(var j=0; j<emails.length; j++)
                    {
                        alert(emails[i])
                    }
                if(p==1 && e==1)
                    {
                        this.setState({r2: true})
                    }
                else
                    {
                        this.setState({r1: true})
                    }
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