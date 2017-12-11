import React from 'react'
import PropTypes from 'prop-types'

const VillainForm = ({onNameChange, onImageChange, onNemesisChange, onUniverseChange}) => {
  return (
  <div>
    <form>
      <div>
        <label> Name </label>
        <input type='text' onChange={onNameChange} />
      </div>

      <div>
        <label> Image </label>
        <input type='text' onChange={onImageChange} />
      </div>

      <div>
        <label> Nemesis </label>
        <input type='text' onChange={onNemesisChange} />
      </div>

      <div> 
        <label> Universe </label>
        <input type='text' onChange={onUniverseChange} />
      </div>
      <button onClick={this.handleSubmit}> Submit Villain </button>
    </form>
  </div>
  )
}

export default VillainForm