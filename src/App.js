import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import tempo from './tempo'

function App()
  {
    return(
      <BrowserRouter>
        <Route exact path="/" component={tempo} />
      </BrowserRouter>
    )
  }

  export default App