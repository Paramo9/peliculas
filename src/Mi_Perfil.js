import React from 'react'

class Mi_Perfil extends React.Component
    {

        constructor(props)
            {
                this.state = {nombre: "", password: ""}
                this.handleChangeNombre = this.handleChangeNombre.bind(this)
                this.handleChangePassword = this.handleChangePassword.bind(this)
            }

        handleChangeNombre(event)
            {
                this.setState({nombre: event.target.value})
            }

        handleChangePassword(event)
            {
                this.setState({password: event.target.value})
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">{localStorage.getItem("nombre")}</h1><br /><br />
                        <h3 align="center">Nivel: {localStorage.getItem("usuario")}</h3><br />
                        <h2 align="center">Actualizar Datos</h2><br /><br />
                        <form>
                            <div align="center">
                                <h3>
                                <input required placeholder="E-mail" type="text" value={this.state.nombre} onChange={this.handleChangeNombre} /><br /><br />
                                <input required placeholder="Contraseña" type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
                                <input type="button" value="Actualizar" /><br /><br />
                                </h3>
                            </div>
                        </form>
                    </div>
                )
            }
    }

export default Mi_Perfil