import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const style={
  container: {
    color: 'white',
    border: '4px outset green',
    borderRadius: '5px',
    margin: '20px'
  },
  h3: {
    textDecoration: 'underline green',
    letterSpacing: '2px',
    fontSize: '25px',
  },
  p: { 
    fontFamily: 'Rajdhani',
    fontSize: '17px'
  },
  link: {
    color: 'white',
    border: '1px solid white'
  }
  }

const HeroCard = ({hero, deleteHero, showUniqueHero}) => {
  return (
  <div style={style.container}>
    <h3 style={style.h3}>{hero.name}</h3>
    <p style={style.p}>SuperPower: {hero.superPower}</p>
    <img style={style.p}src={hero.img}/>
    <p style={style.p}>Universe: {hero.universe}</p>
    <p style={style.p}>Nemesis: {hero.nemesis}</p>
    <button onClick={() => deleteHero(hero)}>Delete Hero</button>
    <button onClick={() => showUniqueHero(hero)}> Show Unique Hero </button>
    <Link to={`/hero/${hero._id}`}>View Hero!</Link>
    <Link to={`/edit-hero/${hero._id}`}> Edit Hero </Link>
  </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroCard
