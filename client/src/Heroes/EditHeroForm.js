import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    color: 'white'
  }
}

const EditHeroForm = ({ 
  name, img, superPower, universe, nemesis,
  onImageChange, onNameChange, onSuperPowerChange, onNemesisChange, onUniverseChange, submitHeroToServer
  }) => 
<form> 

  <div>
  <label style={styles.container}> Name</label>
  <input value={name} onChange={onNameChange}/>
  </div>

  <div>
    <label style={styles.container}> Image </label>
    <input value={img} onChange={onImageChange} />
  </div>

  <div>
    <label style={styles.container}> Superpower </label>
    <input value={superPower} onChange={onSuperPowerChange} />
  </div>

  <div>
    <label style={styles.container}> Nemesis </label>
    <input value={nemesis} onChange={onNemesisChange} />
  </div>

  <div>
    <label style={styles.container}> Universe </label>
    <input value={universe} onChange={onUniverseChange}/>
  </div>
<button onClick={submitHeroToServer}> Submit </button>
</form>

 EditHeroForm.propTypes = {
   name: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
   superPower: PropTypes.string.isRequired,
   universe: PropTypes.string.isRequired,
   nemesis: PropTypes.string.isRequired,
   onImageChange: PropTypes.func.isRequired,
   onNameChange: PropTypes.func.isRequired,
   onUniverseChange: PropTypes.func.isRequired,
   onSuperPowerChange: PropTypes.func.isRequired,
   onNemesisChange: PropTypes.func.isRequired,
   submitHeroToServer: PropTypes.func.isRequired
 }

export default EditHeroForm
