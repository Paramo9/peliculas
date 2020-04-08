import React from 'react'
import firebase from 'firebase'
import {dbconfig} from './Config'

class Mi_Perfil extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {nombre: '', password: '', errorNombre: "", errorPassword: ""}
                this.handleChangeNombre = this.handleChangeNombre.bind(this)
                this.handleChangePassword = this.handleChangePassword.bind(this)
                this.handleSubmit = this.handleSubmit.bind(this)
            }

        handleChangeNombre(event)
            {
                this.setState({nombre: event.target.value})
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
                if(this.state.nombre.includes(" ") || this.state.nombre.length>21 || this.state.password.length<8 || this.state.password.length>13)
                    {
                        if(this.state.nombre.includes(" "))
                            {
                                document.getElementById("errorNombreA").style.visibility = "visible"
                                this.setState({errorNombre: "*El nombre no puede contener espacios."})
                            }
                        else if(this.state.nombre.length>21)
                            {
                                document.getElementById("errorNombreA").style.visibility = "visible"
                                this.setState({errorNombre: "*El nombre no puede tener más de 20 caracteres."})
                            }
                        else
                            {
                                document.getElementById("errorNombreA").style.visibility = "hidden"
                                this.setState({errorNombre: ""})
                            }
                        if(this.state.password.length<8 || this.state.password.length>13)
                            {
                                document.getElementById("errorPasswordA").style.visibility = "visible"
                                this.setState({errorPassword: "*La contraseña debe tener entre 8 y 12 caracteres."})
                            }
                        else
                            {
                                document.getElementById("errorPasswordA").style.visibility = "hidden"
                                this.setState({errorPassword: ""})
                            }
                    }
                else
                    {
                        if(this.state.nombre == localStorage.getItem("nombre") || this.state.password == localStorage.getItem("password"))
                            {
                                if(this.state.nombre == localStorage.getItem("nombre") && this.state.password == localStorage.getItem("password"))
                                    {
                                        document.getElementById("errorNombreA").style.visibility = "hidden"
                                        document.getElementById("errorPasswordA").style.visibility = "visible"
                                        this.setState({errorPassword: "*Ingresa un nombre o contraseña nueva."})
                                    }
                                else if(this.state.nombre == localStorage.getItem("nombre"))
                                    {
                                        document.getElementById("errorPasswordA").style.visibility = "hidden"
                                        document.getElementById("errorNombreA").style.visibility = "hidden"
                                        app.firestore().collection('usuarios').get().then((data) => {
                                            data.forEach((doc) => {
                                                var emailf = doc.get('email')
                                                if(emailf == this.state.email)
                                                    {
                                                        doc.ref.set({
                                                            email: localStorage.getItem("email"),
                                                            nombre: localStorage.getItem("nombre"),
                                                            nivel: "usuario",
                                                            password: this.state.password
                                                        })
                                                    }
                                            })
                                        })
                                        alert("¡Tu contraseña se ha actualizado con éxito!")
                                    }
                                else
                                    {
                                        document.getElementById("errorPasswordA").style.visibility = "hidden"
                                        document.getElementById("errorNombreA").style.visibility = "hidden"
                                        alert("¡Tu nombre se ha actualizado con éxito!")
                                    }
                            }
                        else
                            {
                                document.getElementById("errorPasswordA").style.visibility = "hidden"
                                document.getElementById("errorNombreA").style.visibility = "hidden"
                                alert("¡Tu nombre y tu contraseña se han actualizado con éxito!")
                            }
                    }
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">{localStorage.getItem("nombre")}</h1><br /><br />
                        <h3 align="center">Nivel: {localStorage.getItem("nivel")}</h3><br /><br />
                        <h2 align="center">Actualizar Datos</h2><br /><br />
                        <div className="wrapper">
                            <div id="formContent">
                                <form onSubmit={this.handleSubmit}>
                                    <div align="center">
                                        <h3>
                                        <input required placeholder="Nombre" type="text" value={this.state.nombre} onChange={this.handleChangeNombre} /><br /><br />
                                        <label id="errorNombreA" style={{visibility: "hidden", color: "red", marginBottom: "20px"}} >{this.state.errorNombre}</label><br />
                                        <input required placeholder="Contraseña" type="password" value={this.state.password} onChange={this.handleChangePassword} /><br /><br />
                                        <label id="errorPasswordA" style={{visibility: "hidden", color: "red", marginBottom: "20px"}} >{this.state.errorPassword}</label><br />
                                        <input type="submit" value="Actualizar" /><br /><br />
                                        </h3>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Mi_Perfil