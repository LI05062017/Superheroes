import React from 'react'
import VillainCard from './VillainCard'

const VillainStyle={
  container: {
    color: 'black',
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

const Villains = ({villains}) => {
  return(
    <div style={VillainStyle.container}>
      <h1 style={VillainStyle.h1}> Villains </h1>
      {
        villains.map((villain) => {
          return (
            <VillainCard villain={villain} />
           
          )
        })
      }

    </div>
  )
}

export default Villains