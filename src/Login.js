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
                this.app.firestore().collection('usuarios').get().then((data) => {
                    let emails = []
                    let passwords = []
                    let nombres = []
                    let niveles = []
                    data.forEach((doc) => {
                        emails.push(doc.get('email'))
                        passwords.push(doc.get('password'))
                        nombres.push(doc.get('nombre'))
                        niveles.push(doc.get('nivel'))
                    })
                    var t = 0
                    alert(emails)
                    /*for(var i=0; i<emails.length; i++)
                        {
                            if(emails[i] == this.state.email && passwords[i] == this.state.password)
                                {
                                    t = 1
                                }
                        }
                    if(t==1)
                        {
                            this.setState({r1: true})
                        }
                    else
                        {
                            this.setState({r2: true})
                        }*/
                })
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