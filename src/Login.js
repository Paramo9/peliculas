import React from 'react'
import {Redirect} from 'react-router-dom'

class Login extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {email: '', password: '', r1: false, r2: false}
                this.handleChangeEmail = this.handleChangeEmail.bind(this)
                this.handleChangePassword = this.handleChangePassword.bind(this)
                this.handleSubmit = this.handleSubmit.bind(this)
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
                const data = new FormData(event.target);
                let url = 'https://paramo9.github.io/servletspeliculas/login?email=' + this.state.email + '&password=' + this.state.password;
                fetch(url).then(response => response.text()).then(data => 
                    {
                        alert(data)
                        if(data == "-1")
                            {
                                this.setState({r1: true})
                            }
                        else
                            {
                                var datos = data.split(",");
                                var dato1 = datos[0];
                                var dato2 = datos[1];
                                var dato3 = datos[2];
                                var dato4 = datos[3];
                                localStorage.setItem("nombre", dato1);
                                localStorage.setItem("email", dato2);
                                localStorage.setItem("password", dato3);
                                localStorage.setItem("nivel", dato4);
                                this.setState({r2: true})
                            }
                    });
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