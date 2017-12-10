import React from 'react'

const HeroForm = () => {
 return (
   <div>
      <form>
          <div>
          <label> Name </label>
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
          <button onClick={this.handleSumbit}> Submit </button>
          </form>
    </div>

 )
}

export default HeroForm