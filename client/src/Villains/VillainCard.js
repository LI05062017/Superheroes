import React from 'react'

const VillainStyle={
  container: {
    color: 'white',
    border: '4px outset orange',
    borderRadius: '5px',
    margin: '20px'
  },
  h3: {
    textDecoration: 'underline orange',
    letterSpacing: '2px',
    fontSize: '25px',
  },
  p: { 
    fontFamily: 'Rajdhani',
    fontSize: '17px'
  },
  }

const VillainCard = ({villain, deleteVillain, showUniqueVillain}) => {
  return (
  <div style={VillainStyle.container}>
    <h3 style={VillainStyle.h3}>{villain.name}</h3>
    <img style={VillainStyle.p}src={villain.img}/>
    <p style={VillainStyle.p}>Nemesis: {villain.nemesis}</p>
    <p style={VillainStyle.p}>Universe: {villain.universe}</p>

    <button onClick={() => deleteVillain(villain)}>Delete Villain</button>
    <button onClick={() => showUniqueVillain(villain)}> Show Unique Villain </button>
  </div>
  )
}

export default VillainCard