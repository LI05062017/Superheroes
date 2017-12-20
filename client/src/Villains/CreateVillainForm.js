import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    color: 'white'
  }
}

const CreateVillainForm = ({onNameChange, onImageChange, onNemesisChange, onUniverseChange, handleSubmit, heroes}) => {
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
        <label> Universe </label>
        <input type='text' onChange={onUniverseChange} />
      </div>
      
      <div>
        <label> Nemesis </label>
          <select onChange={onNemesisChange}>
          <option>Pick Your Superhero</option>
            {
              heroes.map(hero => {
              console.log(hero._id)
              return <option value={hero._id}>{hero.name}</option>
            })
            }
          </select>
          </div>
          <button onClick={handleSubmit}> Submit Villain </button>
    </form>
   </div>

    )}
    

CreateVillainForm.propTypes ={
  onNameChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,

}

export default CreateVillainForm