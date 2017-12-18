import React from 'react'

const styleHome = {
  container: {
   boder:'1px dotted black',
   color: 'white',
   fontFamily: 'Kanit',
   textAlign: 'center',
   letterSpacing: '2px',
   
  },
  h1: {
    fontSize: '40px',
    fontFamily:'Righteous',
    textAlign: 'center',
    letterSpacing: '2px',
  }
}

const Home = () => 
  <div style={styleHome.container}> 
    <h1 style={styleHome.h1}> Home </h1>
    <h4> Create your own...</h4>
    <h4> SuperHeroes</h4>
    <h4> ⚡️ and ⚡️</h4>
    <h4> Villains</h4>
    <img src=''/>
    </div>


export default Home