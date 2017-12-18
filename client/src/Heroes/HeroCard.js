import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const style={
  container: {
    color: 'white',
    border: '4px outset white',
    borderRadius: '5px',
    margin: '10px',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    
  },
  h3: {
    fontFamily: 'Orbitron',
    textDecoration: 'underline yellow',
    letterSpacing: '2px',
    fontSize: '27px',
  },
  link: {
    color: 'white',
    fontFamily: 'Orbitron',
    padding: '5px',
    letterSpacing: '2px'
  },
  button: {
    color: 'black',
    fontFamily: 'Orbitron',
    padding: '6px',
    margin: '5px',
    width: '250px'
  }
  }

const HeroCard = ({hero, deleteHero, showUniqueHero}) => {
  return (
  <div style={style.container}>
    <h3 style={style.h3}>{hero.name}</h3>
    <Link to={`/hero/${hero._id}`} style={style.link}>View Hero!</Link>
    <Link to={`/edit-hero/${hero._id}`}style={style.link}> Edit Hero </Link>
    <button onClick={() => showUniqueHero(hero)}style={style.button}> Show Unique Hero </button>
    <button onClick={() => deleteHero(hero)}style={style.button}>Delete Hero</button>
  </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroCard
