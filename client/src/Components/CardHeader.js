import React from 'react'
import PropTypes from 'prop-types'

const style= {
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
  textDecoration: 'underline yellow',
  letterSpacing: '2px',
  fontSize: '27px',
  }
}


const CardHeader = ({name , img}) => {
  return (
    <div>
  <h3 style={style.h3}>{name}</h3>
  <img src={img} />
  </div>
  )
}





export default CardHeader