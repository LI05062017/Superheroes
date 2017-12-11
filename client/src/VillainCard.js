import React from 'react'

const VillainStyle={
  container: {
    border: '1px solid white',
  },
  h3: {
    border: '1px dotted white',
    borderRadius: '5px',
    margin: '20px'
  }
}

const VillainCard = ({villain}) => {
  return (
    <div>
      <h3 style={VillainStyle.h3}>{villain.name}</h3>
    </div>
  )
}

export default VillainCard