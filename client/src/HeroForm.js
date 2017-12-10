import React from 'react'

const HeroFormStyle = {
  container: {
  },
  label: {
  },
  input: {

  }, 
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '2px'
}
}

const HeroForm = () => {
 return (
   <div>
      <form>
          <div style={HeroFormStyle.container}>
          <label style={HeroFormStyle.label}> Name </label>
          <input stype={HeroFormStyle.input}type='text' onChange={this.onNameChange} />
          </div>

          <div>
          <label style={HeroFormStyle.label}> SuperPower </label>
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
          <button style={HeroFormStyle.button} onClick={this.handleSumbit}> Submit Hero </button>
          </form>
    </div>

 )
}

export default HeroForm