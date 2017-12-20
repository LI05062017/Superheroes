import React from 'react'


const styles = {
  container: {
    color: 'white',
    padding: '10px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '3px solid orange',
    borderRadius: '5px',
  },
  p: {
    fontFamily:'Orbitron',
    display:'flex',
    alignItems: 'center',

  },
  title: {
  fontSize: '25px',
  fontFamily:'Orbitron',
  display:'flex',
  alignItems: 'center',
  }
}

const VillainInfo = ({villain}) => {
  return (
    <div style={styles.container} >
      <p style={styles.title}> ⚡️ {villain.name} ⚡️ </p>
      <img src={villain.img} />
      <p style={styles.p}> Universe: {villain.universe} </p>
      <p style={styles.p}> Nemesis: {villain.nemesis ? villain.nemesis.name : 'no nemesis'} </p>
      <img style={styles.p} src={villain.nemesis.img} />
    </div>
  )
}

export default VillainInfo