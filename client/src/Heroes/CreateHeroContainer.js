import React, {Component} from 'react'
import CreateHeroForm from './CreateHeroForm'
import PropTypes from 'prop-types'
import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

class CreateHeroContainer extends Component {
  state = {
    name: undefined,
    superPower: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined
  }

  static propTypes = {
    loadHeroesFromServer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    villains: PropTypes.array.isRequired
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })


  handleSubmit = (e) => {
    e.preventDefault()
    const {name, superPower, img, universe, nemesis} = this.state
    const hero = {name, superPower, img, universe, nemesis}
    $.ajax({
      url: '/api/heroes',
      method: 'POST',
      data: hero
    }).done((response) => {
      this.props.loadHeroesFromServer()
      this.props.history.push('/heroes')
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className='HeroesBody'>
        <h3 className='createHero'> Create Hero </h3>
        <div className='heroForm'>
        <CreateHeroForm 
            villains={this.props.villains}
            handleSubmit={this.handleSubmit}
            onChangeHandler={this.onChangeHandler}
        />
        </div>
      </div>
    )
  }
  }


export default withRouter(CreateHeroContainer)