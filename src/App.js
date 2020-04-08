import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import Inicio from './Inicio'
import Registro from './Registro'

function App()
  {
    return(
      <BrowserRouter>
        <Route exact path="/peliculas" component={Login} />
        <Route exact path="/peliculas/login" component={Login} />
        <Route exact path="/peliculas/inicio" component={Inicio} />
        <Route exact path="/peliculas/registro" component={Registro} />
      </BrowserRouter>
    )
  }

  export default App