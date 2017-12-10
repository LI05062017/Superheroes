import React from 'react'

const HeroesStyle={
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
  },
  h3: {
    border: '1px dotted white',
    borderRadius: '5px',
    margin: '20px'
  }
}


const Heroes = ({heroes}) => {
  return (
    <div style={HeroesStyle.container}>
      <h1 style={HeroesStyle.h1}> Heroes </h1>
      {
        heroes.map((hero) => {
          return (
            <h3 style={HeroesStyle.h3}>{hero.name}</h3>
          )
        })
      }
      </div>
  )
}
export default Heroes