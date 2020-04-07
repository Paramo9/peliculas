import React from 'react'

class Registrar extends React.Component
    {
        constructor(props)
            {
                super(props)
                this.state = {email: '', password: '', name: ''}
                this.handleChangeEmail = this.handleChangeEmail.bind(this)
                this.handleChangePassword = this.handleChangePassword.bind(this)
                this.handleChangeName = this.handleChangePassword.bind(this)
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

        handleChangeName(event)
            {
                this.setState({name: event.target.value})
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">El Club de la Película</h1>
                        <div className="wrapper fadeInDown">
                            <div id="formContent">
                                <h2 align="center">Registro</h2><br />
                                <form onSubmit={this.handleSubmit}>
                                    <div align="center">
                                        <h3>
                                            <input id="login" className="fadeIn second" name="login" placeholder="E-mail" type="text" value={this.state.email} onChange={this.handleChangeEmail} /><br /><br />
                                            <input id="login" className="fadeIn third" name="login" placeholder="Nombre" type="text" value={this.state.name} onChange={this.handleChangeName} /><br /><br />
                                            <input id="password" className="fadeIn fourth" name="login" placeholder="Contraseña" type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
                                            <input type="submit" value="Ingresar" className="fadeIn fifth" /><br /><br />
                                        </h3>
                                    </div>
                                </form>
                                <div id="formFooter">
                                    <h3 align="center" className="astyle underlineHover">Regístrate aquí</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Registrar