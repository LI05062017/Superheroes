import React from 'react'
import HeroCard from './HeroCard'

const HeroStyles = {
 container: {
color: 'white',
textAlign:'center',
fontFamily:'Kanit',
border: '1px solid white',
padding: '30px',

},
h1: {
  fontSize: '45px',
  fontFamily:'Orbitron',
  textAlign: 'center',
  letterSpacing: '3px',
  backgroundcolor: 'white',
  border: '3px solid white',
  borderRadius: '5px',
  padding: '10px',
  margin: '20px'
 }
}
const Heroes = ({heroes, deleteHero}) => {
  return(
    <div style={HeroStyles.container}>
      <h1 style={HeroStyles.h1}> Heroes </h1>
      
      {
        heroes.map((hero) => {
          return (
            <HeroCard 
            hero={hero} 
            deleteHero={ () => deleteHero(hero) }/>
          )
        })
      }
    </div>
  )
}

export default Heroes