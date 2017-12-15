import React from 'react'

const styles = {
 container: {
   color: 'white',
   padding: '10px',
   margin: '10px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
 },
 p: {
   fontFamily:'Orbitron',
   display:'flex',
   alignItems: 'center',

 }
}

const VillainInfo = ({villain}) => {
  return (
    <div style={styles.container} >
      <p style={styles.p}> {villain.name} </p>
      <img src={villain.img} />
      <p style={styles.p}> {villain.nemesis} </p>
      <p style={styles.p}> {villain.universe} </p>
    </div>
  )
}

export default VillainInfo