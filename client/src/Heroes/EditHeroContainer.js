import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class EditHeroContainer extends Component {
  render () {
    return (
      <div>
        <h3> Ready to edit hero with id: {this.props.match.params.heroId} </h3>
        {console.log('PARAMs', this.props.match.params)}
        </div>
    )
  }
}

export default withRouter(EditHeroContainer)