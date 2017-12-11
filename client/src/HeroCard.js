import React from 'react'

const HeroStyle={
  container: {
    border: '1px solid white',
  },
  h3: {
    border: '1px dotted white',
    borderRadius: '5px',
    margin: '20px'
  }
}

const HeroCard = ({hero}) => {
  return (
    <div>
    <h3 style={HeroStyle.h3}>{hero.name}</h3>
    </div>
  )
}
export default HeroCard