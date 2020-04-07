import React from 'react'
import firebase from 'firebase'
import {dbconfig} from './Config'
import './login.css'

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
                        oooo
                    </div>
                )
            }
    }

export default Registrar