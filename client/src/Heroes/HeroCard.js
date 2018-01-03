import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import CardHeader from '../Components/CardHeader'


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
  },
  p: {
    fontFamily: 'Orbitron',
    letterSpacing: '2px',
    fontSize: '17px',
  }
  }

const HeroCard = ({hero, deleteHero, showUniqueHero}) => {
  return (
  <div style={style.container}>
    <CardHeader name={hero.name} img={hero.img}/>
    <Link to={`/hero/${hero._id}`} style={style.link}>View Hero!</Link>
    <Link to={`/edit-hero/${hero._id}`}style={style.link}> Edit Hero </Link>
    <button onClick={() => showUniqueHero(hero)}style={style.button}> Show Unique Hero </button>
    <button onClick={() => deleteHero(hero)}style={style.button}>Delete Hero</button>
    <p style={style.p}> Nemesis: {hero.nemesis ? hero.nemesis.name : 'no nemesis'} </p>
  </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}

export default HeroCard
