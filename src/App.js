import React from 'react'
import {BrowserRouter, Route, HashRouter} from 'react-router-dom'
import Login from './Login'
import Inicio from './Inicio'
import Registro from './Registro'

function App()
  {
    return(
      <HashRouter>
        <BrowserRouter>
          <Route exact path="/peliculas" component={Login} />
          <Route exact path="/peliculas/login" component={Login} />
          <Route exact path="/peliculas/inicio" component={Inicio} />
          <Route exact path="/peliculas/registro" component={Registro} />
        </BrowserRouter>
      </HashRouter>
    )
  }

  export default App