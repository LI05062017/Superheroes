import React from 'react'
import PropTypes from 'prop-types'

const HeroForm = ({onNameChange, onSuperPowerChange, onImageChange, onNemesisChange, onUniverseChange, handleSumbit}) => {
 return (
   <div>
      <form>
          <div >
          <label > Name </label>
          <input type='text' onChange={this.onNameChange} />
          </div>

          <div>
          <label> SuperPower </label>
          <input type='text'onChange={this.onSuperPowerChange}/>
          </div>
          
          <div>
            <label> Image </label>
            <input type='text' onChange={this.onImageChange}/>
          </div>

          <div>
            <label> Universe </label>
            <input type='text'onChange={this.onUniverseChange} />
          </div>

          <div>
            <label> Nemesis </label>
            <input type='text' onChange={this.onNemesisChange}/>
          </div>
          <button onClick={this.handleSumbit}> Submit Hero </button>
          </form>
    </div>

 )
}

// HeroForm.propTypes = {
//   onNameChange: PropTypes.object.isRequired,
//   onSuperPowerChange:PropTypes.string.isRequired,
//   onImageChange:PropTypes.string.isRequired,
//   onNemesisChange:PropTypes.string.isRequired,
//   onUniverseChange:PropTypes.string.isRequired,
//   handleSumbit:PropTypes.string.isRequired,
// }

export default HeroForm