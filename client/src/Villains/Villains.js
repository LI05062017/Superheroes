import React from 'react'
import VillainCard from './VillainCard'

const VillainStyle = {
  container: {
 color: 'white',
 fontFamily: 'Kanit',
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

const Villains = ({villains, deleteVillain, showUniqueVillain}) => {
  return(
    <div style={VillainStyle.container}>
      <h1 style={VillainStyle.h1}> ⚡️ ⚡️ Villains ⚡️ ⚡️ </h1>
      {
        villains.map((villain) => {
          return (
            <VillainCard 
            villain={villain} 
            deleteVillain={deleteVillain}
            showUniqueVillain={showUniqueVillain}
            />
           
          )
        })
      }

    </div>
  )
}

export default Villains