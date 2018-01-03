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
    border: '3px solid yellow',
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
  },
  textBox: {
    resize: 'none',
    width: '300px',
  }
}

const HeroInfo = ({hero, comments, submitComment, handleOnTextChange, text}) => {
  return (
    <div style={styles.container} >
      <p style={styles.title}> ⭐️ {hero.name} ⭐️ </p>
      <p style={styles.p}> Superpower: {hero.superPower} </p>
      <img style={styles.p}src={hero.img}/>
      <p style={styles.p}> Universe: {hero.universe} </p>
      <p style={styles.p}> Nemesis: {hero.nemesis ? hero.nemesis.name : 'no nemesis'} </p>
      {/* <img style={styles.p} src={hero.nemesis.img} /> */}
      <CommentList 
      comments={comments}/>
      <CommentForm  
      handleOnTextChange={handleOnTextChange}
      submitComment={submitComment}
      text={text}
      />
      </div>
  )
}

HeroInfo.propTypes = {
  hero: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default HeroInfo