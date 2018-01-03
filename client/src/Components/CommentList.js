import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const style = {
  container: {
    color: 'white',
    border: '1px solid red' ,
    padding: '10px',
    margin: '10px'
  }, 
  title: {
    textAlign: 'center'
  }
}

const CommentList = ({comments}) => {
  return (
    <div>
      <h2 style={style.title}> Comments </h2>
      <div style={style.container}>
      {
        comments && comments.length > 0
        ? comments.map(comment => {
          return <CommentCard
          key={comment._id}
          text={comment.text}
          />
        })
        : <p>No Comments</p>
      }
      </div>
    </div>
  )
}

CommentList.propTypes= {
  comments: PropTypes.array.isRequired
}

export default CommentList