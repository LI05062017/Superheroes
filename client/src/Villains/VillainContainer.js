import React, {Component} from 'react'
import $ from 'jquery'
import VillainInfo from './VillainInfo'
import {withRouter} from 'react-router-dom'

class VillainContainer extends Component {
  state= {
    villain: undefined,
    comments: undefined,
    text: undefined
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
        this.setState({villain: response.villain, comments: response.villain.comments })
      })
    }

    submitComment = (e) => {
      e.preventDefault()
      const newComment ={text: this.state.text}
    $.ajax({
      url: `/api/villains/${this.props.match.params.villainId}/comments`,
      method: 'POST',
      data: newComment
    }).done((response) => {
      console.log(response)
      this.loadVillainFromServer(this.props.match.params.villainId)
      this.setState({text: ''})
    })
  }

  handleOnTextChange = (e) => this.setState({ text: e.target.value })
  
  render() {
    return (
      <div>
         VillainContainer 
         {
           this.state.villain
           ? <VillainInfo 
           villain={this.state.villain} 
           comments={this.state.comments} 
           submitComment={this.submitComment}
           handleOnTextChange={this.handleOnTextChange}
           text={this.state.text}
           />
           : 'Error'
         }
        </div>
    )
  }
}

export default withRouter(VillainContainer)