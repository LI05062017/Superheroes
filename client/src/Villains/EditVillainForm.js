import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    color: 'white'
  }
}

const EditVillainForm = ({
  name, img, nemesis, universe, onNameChange, onImageChange, onNemesisChange, onUniverseChange, submitVillainToServer
}) => 
<form>

  <div>
    <label style={styles.container}> Name </label>
    <input value={name} onChange={onNameChange} />
    </div>

  <div>
  <label style={styles.container}> Image </label>
  <input value={img} onChange={onImageChange} />
    </div>

  <div>
  <label style={styles.container}> Nemesis </label>
  <input value={nemesis} onChange={onNemesisChange} />
   </div>
  
  <div>
  <label style={styles.container}> Universe </label>
  <input value={universe} onChange={onUniverseChange} />
    </div>
    <button onClick={submitVillainToServer}> Submit </button>
</form>

EditVillainForm.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  nemesis: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
}

export default EditVillainForm