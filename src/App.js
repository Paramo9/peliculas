import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import Inicio from './Inicio'
import Login_Incorrecto from './Login_Incorrecto'
import Registrar from './Registrar'

function App()
  {
    return(
      <BrowserRouter>
        <Route exact path="/peliculas" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/login_incorrecto" component={Login_Incorrecto} />
        <Route exact path="/registrar" component={Registrar} />
      </BrowserRouter>
    )
  }

  export default App