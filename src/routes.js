import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from  './pages/Home'

const Routes =  () => (


  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>  
        <Route path={process.env.PUBLIC_URL +'/'} exact component={Home} />

      </Switch>
 
  </BrowserRouter>
)

export default Routes