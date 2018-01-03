import React from 'react'
import PropTypes from 'prop-types'
import CommentList from '../Components/CommentList'
import CommentForm from '../Components/CommentForm'

const styles = {
  container: {
    color: 'white',
    padding: '10px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '3px solid orange',
    borderRadius: '5px',
  },
  p: {
    fontFamily:'Orbitron',
    display:'flex',
    alignItems: 'center',

  },
  title: {
  fontSize: '25px',
  fontFamily:'Orbitron',
  display:'flex',
  alignItems: 'center',
  }
}

const VillainInfo = ({villain, comments, submitComment, handleOnTextChange, text}) => {
  return (
    <div style={styles.container} >
      <p style={styles.title}> ⚡️ {villain.name} ⚡️ </p>
      <img src={villain.img} />
      <p style={styles.p}> Universe: {villain.universe} </p>
      <p style={styles.p}> Nemesis: {villain.nemesis ? villain.nemesis.name : 'no nemesis'} </p>
      <CommentList
      comments={comments} />
      <CommentForm
      handleOnTextChange={handleOnTextChange}
      submitComment={submitComment}
      text={text}
      />
    </div>
  )
}

VillainInfo.propTypes = {
  villains: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default VillainInfo