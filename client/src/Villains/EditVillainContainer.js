import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import EditVillainForm from './EditVillainForm'
import PropTypes from 'prop-types'

class EditVillainContainer extends Component {
  state = {
    name: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined,
    loading: true
  }

static propTypes = {
 match: PropTypes.object.isRequired,
 history: PropTypes.object.isRequired
}

componentDidMount () {
  this.loadVillainFromServer()
}

onNameChange = (e) => this.setState({name: e.target.value})
onImageChange = (e) => this.setState({img: e.target.value})
onNemesisChange = (e) => this.setState({nemesis: e.target.value})
onUniverseChange = (e) => this.setState({universe: e.target.value})

loadVillainFromServer = () => {
  $.ajax({
    url: `/api/villains/${this.props.match.params.villainId}`,
    method: 'GET'
  }).done((response) => {
    console.log(response)
    const {name, img, nemesis, universe} = response.villain
    this.setState ({
      name,
      img,
      universe,
      nemesis,
      loading: false
    })
  })
}

submitVillainToServer = (e) => {
  e.preventDefault()
  const {name, img, universe, nemesis} = this.state
  const villain ={ name, img, universe, nemesis}
  console.log('VILLAIN TO EDIT', villain)
  $.ajax({
    url: `/api/villains/${this.props.match.params.villainId}`,
    method: 'PUT'
  }).done((response) => {
    console.log('RES FROM PUT', response)
    alert(`${response.villain.name} updated`)
    this.props.history.push(`/villain/${response.villain._id}`)
  })
}

render () {
  const {name, img, nemesis, universe} = this.state
  return (
   <div>
     {
       !this.state.loading
       ? <EditVillainForm
       name={name}
       img={img}
       nemesis={nemesis}
       universe={universe}
       onNameChange={this.onNameChange}
       onImageChange={this.onImageChange}
       onNemesisChange={this.onNemesisChange}
       onUniverseChange={this.onUniverseChange}
       />
       : <h1> Loading... </h1>
      }
  </div>
  )
}

}

export default withRouter(EditVillainContainer)