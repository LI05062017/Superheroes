import React from 'react'

const Heroes = ({heroes}) => {
  return (
    <div>
      <h1> Heroes </h1>
      {
        heroes.map((hero) => {
          return (
            <h3>{hero.name}</h3>
          )
        })
      }
      </div>
  )
}
export default Heroes