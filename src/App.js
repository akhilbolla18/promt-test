import {BrowserRouter,Switch, Route} from "react-router-dom"

import Login from './Login'
import Register from './Register'

import './App.css'

const App = () => (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
   </Switch>
   </BrowserRouter>
     
  
  )


export default App