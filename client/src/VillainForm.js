import React from 'react'

const VillainForm = ({onNameChange, onImageChange, onNemesisChange, onUniverseChange}) => {
  return(
  <div>
    <form>
      <div>
        <label> Name </label>
        <input type='text' onChange={this.onNameChange} />
      </div>

      <div>
        <label> Image </label>
        <input type='text' onChange={this.onImageChange} />
      </div>

      <div>
        <label> Nemesis </label>
        <input type='text' onChange={this.onNemesisChange} />
      </div>

      <div> 
        <label> Universe </label>
        <input type='text' onChange={this.onUniverseChange} />
      </div>
      <button onClick={this.handleSubmit}> Submit Villain </button>
    </form>
  </div>
  )
}

export default VillainForm