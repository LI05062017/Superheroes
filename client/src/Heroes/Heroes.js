import React from 'react'
import HeroCard from './HeroCard'

const HeroStyles = {
 container: {
color: 'white',
fontFamily:'Kanit',
padding: '3px',

},
h1: {
  fontSize: '50px',
  fontFamily:'Righteous',
  textAlign: 'center',
  letterSpacing: '4px',
  
  borderRadius: '5px',
  padding: '25px',
  margin: '20px',

 }
}
const Heroes = ({heroes, deleteHero, showUniqueHero}) => {
  return(
    <div style={HeroStyles.container}>
      <h1 style={HeroStyles.h1}> ⭐️ ⭐️ Superheroes ⭐️ ⭐️ </h1>
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