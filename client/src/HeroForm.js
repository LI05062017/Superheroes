import React from 'react'
import PropTypes from 'prop-types'

const HeroForm = ({onNameChange, onSuperPowerChange, onImageChange, onNemesisChange, onUniverseChange, handleSumbit}) => {
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
            <input type='text' onChange={onNemesisChange}/>
          </div>
          <button onClick={this.handleSumbit}> Submit Hero </button>
          
          </form>
    </div>

 )
}


export default HeroForm