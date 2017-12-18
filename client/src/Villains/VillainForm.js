import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    color: 'white'
  }
}

const VillainForm = ({onNameChange, onImageChange, onNemesisChange, onUniverseChange, handleSubmit}) => {
  return (
  <div>
    <form>
      <div>
        <label style={styles.container} > Name </label>
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
      <button onClick={handleSubmit}> Submit Villain </button>
    </form>
  </div>
  )
}

VillainForm.propTypes ={
  onNameChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
}

export default VillainForm