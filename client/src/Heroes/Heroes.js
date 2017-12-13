import React from 'react'
import HeroCard from './HeroCard'

const HeroStyles = {
 container: {
color: 'white',
textAlign:'center',
fontFamily:'Kanit',
padding: '30px',

},
h1: {
  fontSize: '45px',
  fontFamily:'Orbitron',
  textAlign: 'center',
  letterSpacing: '4px',
  backgroundcolor: 'white',
  border: '4px dashed white',
  textDecoration: 'underline green',
  borderRadius: '5px',
  padding: '25px',
  margin: '20px',
 }
}
const Heroes = ({heroes, deleteHero, showUniqueHero}) => {
  return(
    <div style={HeroStyles.container}>
      <h1 style={HeroStyles.h1}> Heroes </h1>
      
      {
        heroes.map((hero) => {
          return (
            <HeroCard 
            hero={hero} 
            deleteHero={deleteHero}
            showUniqueHero={showUniqueHero}
            />

          )
        })
      }
    </div>
  )
}

export default Heroes