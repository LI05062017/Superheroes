import React, {Component} from 'react'
import VillainForm from './VillainForm'
import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

class CreateVillainContainer extends Component {
  state = {
    name: undefined,
    img: undefined,
    nemesis: undefined,
    universe: undefined
  }

  onNameChange = (e) => this.setState({ name: e.target.value})

  onImageChange = (e) => this.setState({ img: e.target.value})

  onNemesisChange = (e) => this.setState({ nemesis: e.target.value})

  onUniverseChange = (e) => this.setState({ universe: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    const{name, img, nemesis, universe} = this.state
    const villain = {name, img, nemesis, universe}
  $.ajax({
    url: '/api/villains',
    method: 'POST',
    data: villain
  }).done((response) => {
    this.props.loadVillainsFromServer
    this.props.history.push('/villains')
   })
  }

  render() {
    return(
      <div className='VillainBody'> 
        <h3 className='createVillain'> Create Villain </h3>
        <div className='villainForm'>
        <VillainForm 
            onNameChange={this.onNameChange}
            onImageChange={this.onImageChange}
            onNemesisChange={this.onNemesisChange}
            onUniverseChange={this.onUniverseChange}
            handleSubmit={this.handleSubmit}
        />
        </div>
      </div>
    )
  }
}

export default withRouter(CreateVillainContainer)