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
   color: 'black',
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

const EditVillainForm = ({
  name, img, nemesis, universe, onNameChange, 
  onImageChange, onNemesisChange, onUniverseChange, 
  submitVillainToServer, heroes
}) => 
<form>

  <div style={styles.container}>
    <label style={styles.input}> Name </label>
    <input style={styles.box} value={name} onChange={onNameChange} />
  </div>

  <div style={styles.container}>
    <label style={styles.input}> Image </label>
    <input style={styles.box} value={img} onChange={onImageChange} />
  </div>
  
  <div style={styles.container}>
    <label style={styles.input}> Universe </label>
    <input style={styles.box} value={universe} onChange={onUniverseChange} />
  </div>

  <div style={styles.container}>
    <label style={styles.input}> Nemesis </label>
    <select onChange={onNemesisChange}>
    <option> This is an option </option>
    {
      heroes.map(hero => {
        console.log(hero._id)
        return <option value={hero._id}>{hero.name}</option>
      })
    }
    </select>
  </div>

  <div style={styles.button}>
    <button onClick={submitVillainToServer}> Submit </button>
  </div>

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
  heroes: PropTypes.array.isRequired
}

export default EditVillainForm