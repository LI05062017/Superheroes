import React from 'react'
import PropTypes from 'prop-types'

const styles = {
   container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
   },
input: {
    fontSize: '20px',
    color: 'white',
    fontFamily: 'Kanit',
    padding: '2px',
  },
  box: {
    fontSize: '10px',
    color: 'white',
    fontFamily: 'Kanit',
    padding: '2px',
  },
  button: {
    padding: '9px',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center'
  }
}

const EditHeroForm = ({ 
  name, img, superPower, universe, nemesis,
  onImageChange, onNameChange, onSuperPowerChange, onNemesisChange, onUniverseChange, submitHeroToServer
  }) => 
<form> 

  <div style={styles.container}>
  <label style={styles.input}> Name</label>
  <input style={styles.box} value={name} onChange={onNameChange}/>
  </div>

  <div style={styles.container}>
    <label style={styles.input}> Image </label>
    <input style={styles.box} value={img} onChange={onImageChange} />
  </div>

  <div style={styles.container}>
    <label style={styles.input}> Superpower </label>
    <input style={styles.box} value={superPower} onChange={onSuperPowerChange} />
  </div>

  <div style={styles.container}>
    <label style={styles.input}> Nemesis </label>
    <input style={styles.box} value={nemesis} onChange={onNemesisChange} />
  </div>

  <div style={styles.container}>
    <label style={styles.input}> Universe </label>
    <input style={styles.box} value={universe} onChange={onUniverseChange}/>
  </div>
  <div style={styles.button}>
<button  onClick={submitHeroToServer}> Submit </button>
  </div>
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
