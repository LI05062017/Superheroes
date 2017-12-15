import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

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
    <Link to={`/villain/${villain._id}`}> View Villain!</Link>
    <Link to={`/edit-villain/${villain._id}`}> Edit Villain </Link>
  </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.object.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}

export default VillainCard