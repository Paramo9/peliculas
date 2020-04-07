import React from 'react'
import './registrar.css'

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
                                            <input className="fadeIn second" placeholder="E-mail" type="text" value={this.state.email} onChange={this.handleChangeEmail} /><br /><br />
                                            <input className="fadeIn third" placeholder="Nombre" type="text" value={this.state.name} onChange={this.handleChangeName} /><br /><br />
                                            <input className="fadeIn fourth" placeholder="Contraseña" type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
                                            <input type="submit" value="Registrar" className="fadeIn fifth" /><br /><br />
                                        </h3>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Registrar