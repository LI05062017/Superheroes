import React, {Component} from 'react'
import $ from 'jquery'
import VillainInfo from './VillainInfo'
import {withRouter} from 'react-router-dom'

class VillainContainer extends Component {
  state= {
    villain: undefined
  }
    componentDidMount () {
    const villainId = this.props.match.params.villainId
     this.loadVillainFromServer(villainId)
    }
  
    loadVillainFromServer = (id) => {
      $.ajax({
        url:`/api/villains/${id}`,   
        method: 'GET'
      }).done((response) => {
        console.log(response)
        this.setState({villain: response.villain})
      })
    }
  
  render() {
    return (
      <div>
         VillainContainer 
         {
           this.state.villain
           ? <VillainInfo villain={this.state.villain} />
           : 'Error'
         }
        </div>
    )
  }
}

export default withRouter(VillainContainer)