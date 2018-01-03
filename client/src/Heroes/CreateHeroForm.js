import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Components/Button'

const CreateHeroForm = ({onChangeHandler, onSuperPowerChange, onImageChange, onNemesisChange, onUniverseChange, handleSubmit, villains}) => {
 return (
   <div>
      <form>
          <div >
          <label > Name </label>
          <input type='text' onChange={onChangeHandler} id={'name'} />
          </div>

          <div>
          <label> SuperPower </label>
          <input type='text'onChange={onChangeHandler} id={'superPower'}/>
          </div>
          
          <div>
            <label> Image </label>
            <input type='text' onChange={onChangeHandler} id={'img'} />
          </div>

          <div>
            <label> Universe </label>
            <input type='text'onChange={onChangeHandler} id={'universe'} />
          </div>

          <div>
            <label> Nemesis </label>
            <select  onChange={onChangeHandler} id={'nemesis'}>
            <option> Pick Your Villain </option>
             {
               villains.map(villain => {
              console.log(villain._id)
              return <option value={villain._id}>{villain.name}</option>
             })
            }
            </select>
          </div>
          <Button handleClick={handleSubmit}> Submit Hero</Button>
          </form>
    </div>

 )
}

CreateHeroForm.propTypes ={
  onChangeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  villains: PropTypes.array.isRequired
}


export default CreateHeroForm