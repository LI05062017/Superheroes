import React from 'react'

const Villains = ({villains}) => {
  return(
    <div>
      <h1> Villains </h1>
      {
        villains.map((villain) => {
          return (
            <h3>{villain.name}</h3>
           
          )
        })
      }

    </div>
  )
}

export default Villains