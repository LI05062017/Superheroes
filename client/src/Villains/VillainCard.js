import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'
import CardHeader from '../Components/CardHeader'

const style={
  container: {
    color: 'white',
    border: '4px outset white',
    borderRadius: '5px',
    margin: '10px',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  h3: {
    fontFamily: 'Orbitron',
    textDecoration: 'underline orange',
    letterSpacing: '2px',
    fontSize: '27px',
  },
  link: { 
    color: 'white',
    fontFamily: 'Orbitron',
    padding: '5px',
    letterSpacing: '2px'
  },
  button: {
    color: 'black',
    fontFamily: 'Orbitron',
    padding: '6px',
    margin: '5px',
    width: '250px'
  },
  p: {
    fontFamily: 'Orbitron',
    letterSpacing: '2px',
    fontSize: '17px',
  }
  }

const VillainCard = ({villain, deleteVillain, showUniqueVillain}) => {
  return (
  <div style={style.container}>
   <CardHeader name={villain.name} img={villain.img} />
    <Link to={`/villain/${villain._id}`} style={style.link} > View Villain!</Link>
    <Link to={`/edit-villain/${villain._id}`} style={style.link} > Edit Villain </Link>
    <button onClick={() => deleteVillain(villain)}style={style.button}>Delete Villain</button>
    <button onClick={() => showUniqueVillain(villain)}style={style.button}> Show Unique Villain </button>
    <p style={style.p}> Nemesis: {villain.nemesis ? villain.nemesis.name : 'no nemesis'} </p>
  </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.object.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}

export default VillainCard