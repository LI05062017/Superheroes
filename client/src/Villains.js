import React from 'react'
import VillainCard from './VillainCard'

const VillainStyle={
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
        textDecoration: 'underline orange',
        borderRadius: '5px',
        padding: '25px',
        margin: '20px',
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