import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'

function App()
  {
    return(
      <BrowserRouter>
        <Route exact path="/peliculas" component={Login} />
      </BrowserRouter>
    )
  }

  export default App