import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    color: 'white',
    border: '1px solid blue'
  }
}

const CommentCard = ({text}) => {
  return (
    <p style={style.container}> {text} </p>
      
  )
}

CommentCard.propTypes = {
  text: PropTypes.string.isRequired
}

export default CommentCard