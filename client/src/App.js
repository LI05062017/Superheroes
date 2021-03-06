import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Heroes from './Heroes/Heroes'
import Villains from './Villains/Villains'
import Home from './SitePages/Home'
import Header from './SitePages/Header'
import NavBar from './Components/NavBar'
import './Components/style.css'
import HeroContainer from './Heroes/HeroContainer'
import VillainContainer from './Villains/VillainContainer'
import CreateHeroContainer from './Heroes/CreateHeroContainer'
import CreateVillainContainer from './Villains/CreateVillainContainer'
import EditHeroContainer from './Heroes/EditHeroContainer'
import EditVillainContainer from './Villains/EditVillainContainer'

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

deleteHero = (hero) => {
  $.ajax({
    url:`/api/heroes/${hero._id}`,
    method: 'DELETE',
  }).done((response) => {
    console.log(response)
    this.loadHeroesFromServer()
  })
}

showUniqueHero = (hero) => {
  $.ajax({
    url: `/api/heroes/${hero._id}`,
    method: 'GET',
  }).done((response) => {
    console.log(response)
    const hero = response.hero
    alert(`${hero.name}, Superpower: ${hero.superPower}, Nemesis: ${hero.nemesis}`)
  })
}

loadVillainsFromServer = () => {
  $.ajax({
    url: '/api/villains',
    method: 'GET'
  }).done((response) => {
    this.setState({ villains: response.villains})
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
  })
}

deleteVillain = (villain) => {
  $.ajax({
    url:`/api/villains/${villain._id}`,
    method: 'DELETE',
  }).done((response) => {
    console.log(response)
    this.loadVillainsFromServer()
  })
}

showUniqueVillain = (villain) => {
  $.ajax ({
    url: `/api/villains/${villain._id}`,
    method: 'GET',
  }).done((response) => {
    console.log(response)
    const villain = response.villain
    alert(`${villain.name}, Nemesis: ${villain.nemesis}, Universe: ${villain.universe}`)
  })
}

render() {
  return (
    <div className='body'>
  
<Router>
  <div>
    <NavBar />
    <Header />
    <Route exact path='/' component={Home} />
    {
      this.state.villains
      ?<Route path='/create-hero' render={() => <CreateHeroContainer villains={this.state.villains} loadHeroesFromServer={this.loadHeroesFromServer}/>} />
      : 'No villains yet'
    }
    
    {
       this.state.heroes
      ? <Route path='/heroes' render={() => <Heroes showUniqueHero={this.showUniqueHero} deleteHero={this.deleteHero} heroes={this.state.heroes} />} />
      : 'Error!'
    }
    
    <Route path='/hero/:heroId' render={() => <HeroContainer />} />
    {
    this.state.villains
    ?<Route path='/edit-hero/:heroId' render={() => <EditHeroContainer villains={this.state.villains}/>} />
    : 'no villains'
    }
    
    {
      this.state.heroes
      ? <Route path='/create-villain' render={() => <CreateVillainContainer heroes={this.state.heroes} loadVillainsFromServer={this.loadVillainsFromServer}/>} />
      : 'No heroes yet'
    }
    
   { 
     this.state.villains
     ? <Route path='/villains' render={() => <Villains showUniqueVillain={this.showUniqueVillain} deleteVillain={this.deleteVillain} villains={this.state.villains} />} />
     : 'Error!'
   }

    <Route path='/villain/:villainId' render={() => <VillainContainer />} />
   {
    this.state.villains
     ? <Route path='/edit-villain/:villainId' render={() => <EditVillainContainer  heroes={this.state.heroes}/>} />
    : 'No Heroes'
   }
  </div>
</Router>
 </div>
  )
 }
}



export default App