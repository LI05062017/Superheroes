import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import HeroInfo from './HeroInfo'
import $ from 'jquery'

class HeroContainer extends Component {
  state = {
    hero: undefined
  }

  componentDidMount () {
   const heroId = this.props.match.params.heroId
   this.loadHero(heroId)
  }

  loadHero = (id) => {
    $.ajax({
      url:`/api/heroes/${id}`,   
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({hero: response.hero})
    })
  }

 render() {
   return (
     <div>
       Hello from Hero HeroContainer
       {
         this.state.hero
         ? <HeroInfo hero={this.state.hero} />
         : 'Error'
       }


      </div>

   )
 }
}

export default withRouter(HeroContainer)