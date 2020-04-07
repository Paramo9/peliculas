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
        <Route exact path="/peliculas" component={Registrar} />
        <Route exact path="/peliculas/login" component={Login} />
        <Route exact path="/peliculas/inicio" component={Inicio} />
        <Route exact path="/peliculas/login_incorrecto" component={Login_Incorrecto} />
        <Route exact path="/peliculas/registrar" component={Registrar} />
      </BrowserRouter>
    )
  }

  export default App