import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import EditHeroForm from './EditHeroForm'
import PropTypes from 'prop-types'

class EditHeroContainer extends Component {
  state = {
    name: undefined,
    superPower: undefined,
    img: undefined,
    nemesis: undefined,
    universe: undefined,
    loading: true
  }

static propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

 componentDidMount () {
  this.loadHeroFromServer()
 }

 onNameChange = (e) => this.setState({ name: e.target.value })
 onImageChange = (e) => this.setState({ img: e.target.value })
 onSuperPowerChange = (e) => this.setState({ superPower: e.target.value })
 onNemesisChange = (e) => this.setState({ nemesis: e.target.value })
 onUniverseChange = (e) => this.setState({ universe: e.target.value })
 

  loadHeroFromServer = () => {
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      const {name, img, nemesis, universe, superPower} = response.hero
      this.setState ({
      name,
      superPower,
      img,
      nemesis,
      universe,
      loading: false
      })
    })
  }

   submitHeroToServer = (e) => {
     e.preventDefault()
     const {name, img, universe, superPower, nemesis} = this.state
      const hero ={name, img, universe, superPower, nemesis}
      console.log('HERO TO EDIT', hero)
      $.ajax({
        url: `/api/heroes/${this.props.match.params.heroId}`,
        method: 'PUT'
      }).done((response) => {
        console.log("RES FROM PUT" ,response)
        alert(`${response.hero.name} updated`)
        this.props.history.push(`/hero/${response.hero._id}`)

      })        
    }


  render () {
    const {name, img, nemesis, universe, superPower} = this.state
    return (
      <div>
        {
          !this.state.loading
          ? <EditHeroForm
            name={name}
            img={img}
            superPower={superPower}
            nemesis={nemesis}
            universe={universe}
            onNameChange={this.onNameChange}
            onImageChange={this.onImageChange}
            onSuperPowerChange={this.onSuperPowerChange}
            onNemesisChange={this.onNemesisChange}
            onUniverseChange={this.onUniverseChange}
            submitHeroToServer={this.submitHeroToServer}
            />
          : <h1> Loading.... </h1>
        }
        </div>
    )
  }
}

export default withRouter(EditHeroContainer)