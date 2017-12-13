import React from 'react'

const HeroStyle={
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
  }

const HeroCard = ({hero, deleteHero, showUniqueHero}) => {
  return (
  <div style={HeroStyle.container}>
    <h3 style={HeroStyle.h3}>{hero.name}</h3>
    <p style={HeroStyle.p}>SuperPower: {hero.superPower}</p>
    <img style={HeroStyle.p}src={hero.img}/>
    <p style={HeroStyle.p}>Universe: {hero.universe}</p>
    <p style={HeroStyle.p}>Nemesis: {hero.nemesis}</p>
    <button onClick={() => deleteHero(hero)}>Delete Hero</button>
    <button onClick={() => showUniqueHero(hero)}> Show Unique Hero </button>
  </div>
  )
}


export default HeroCard
