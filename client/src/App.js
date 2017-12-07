import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Heroes from './Heroes'
import Home from './Home'
import NavBar from './NavBar'


const App = () => 
<Router>
   <div>
    <NavBar />
    <Route exact path='/' component={Home} />
    <Route path='/heroes' component={Heroes} />
   </div>
</Router>


export default App