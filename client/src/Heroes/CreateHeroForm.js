import React from 'react'
import PropTypes from 'prop-types'

const CreateHeroForm = ({onNameChange, onSuperPowerChange, onImageChange, onNemesisChange, onUniverseChange, handleSubmit, villains}) => {
 return (
   <div>
      <form>
          <div >
          <label > Name </label>
          <input type='text' onChange={onNameChange} />
          </div>

          <div>
          <label> SuperPower </label>
          <input type='text'onChange={onSuperPowerChange}/>
          </div>
          
          <div>
            <label> Image </label>
            <input type='text' onChange={onImageChange}/>
          </div>

          <div>
            <label> Universe </label>
            <input type='text'onChange={onUniverseChange} />
          </div>

          <div>
            <label> Nemesis </label>
            <select onChange={onNemesisChange}>
            <option> Pick Your Villain </option>
             {
               villains.map(villain => {
              console.log(villain._id)
              return <option value={villain._id}>{villain.name}</option>
             })
            }
            </select>
          </div>
          <button onClick={handleSubmit}> Submit Hero </button>
          
          </form>
    </div>

 )
}

CreateHeroForm.propTypes ={
  onNameChange: PropTypes.func.isRequired,
  onSuperPowerChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  villains: PropTypes.array.isRequired
}


export default CreateHeroForm