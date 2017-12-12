import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Heroes from './Heroes'
import Villains from './Villains'
import Home from './Home'
import NavBar from './NavBar'
import './style.css'
import CreateHeroContainer from './CreateHeroContainer'
import CreateVillainContainer from './CreateVillainContainer'
import $ from 'jquery'


class App extends Component {
  state = {
    heroes: undefined,
    villains: undefined
  }

componentDidMount () {
  this.loadHeroesFromServer()
  this.loadVillainsFromServer()
}

loadHeroesFromServer = () => {
  $.ajax({
    url: '/api/heroes',
    method: 'GET'
  }).done((response) => {
    this.setState({heroes: response.heroes})
  })
}

submitHeroPost = (e) => {
  e.preventDeafult()
  const newHero = {
    name: this.state.name,
    superPower: this.state.superPower,
    img: this.state.img,
    universe: this.state.universe,
    nememsis: this.state.nememsis
  }
  $.ajax({
    url: '/api/heroes',
    method: 'POST',
    data: newHero
  }).done((response) => {
    console.log(response)
  })
}

// deletePostFromHero = (hero) => {
//   $.ajax({
//     url:`/api/heroes/${post._id}`,
//     method: 'DELETE',
//   }).done((response) => {
//     console.log(response)
//     this.loadHeroesFromServer()
//   })
// }

loadVillainsFromServer = () => {
  $.ajax({
    url: '/api/villains',
    method: 'GET'
  }).done((response) => {
    this.setState({ villains: response.villains })
  })
}

submitVillainPost = (e) => {
  e.preventDeafult()
  const newVillain = {
    name: this.state.name,
    img: this.state.img,
    universe: this.state.universe,
    nememsis: this.state.nememsis
  }
  $.ajax({
    url: '/api/villains',
    method: 'POST',
    data: newVillain
  }).done((response) => {
    console.log(response)
  })
}

// deletePostFromVillain = (villain) => {
//   $.ajax({
//     url:`/api/villains/${post._id}`,
//     method: 'DELETE',
//   }).done((response) => {
//     console.log(response)
//     this.loadVillainsFromServer()
//   })
// }


render() {
  return (
    <div className='body'>
<Router>
  <div>
    <NavBar />
    <Route exact path='/' component={Home} />
    <Route path='/create-hero' render={() => <CreateHeroContainer loadHeroesFromServer={this.loadHeroesFromServer}/>} />
    {
       this.state.heroes
      ? <Route path='/heroes' render={() => <Heroes heroes={this.state.heroes} />} />
      : 'Error!'
    }
    
   <Route path='/create-villain' render={() => <CreateVillainContainer loadVillainsFromServer={this.loadVillainsFromServer}/>} />
   { 
     this.state.villains
     ? <Route path='/villains' render={() => <Villains villains={this.state.villains} />} />
     : 'Error!'
   }
  </div>
</Router>
 </div>
  )
 }
}



export default App