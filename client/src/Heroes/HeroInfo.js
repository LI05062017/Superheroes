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

const HeroInfo = ({hero}) => {
  return (
    <div style={styles.container} >
      <p style={styles.p}> {hero.name} </p>
      <p style={styles.p}> {hero.superPower} </p>
      <img src={hero.img} />
      <p style={styles.p}> {hero.universe} </p>
       <p style={styles.p}> {hero.nemesis} </p>
      </div>
  )
}

export default HeroInfo