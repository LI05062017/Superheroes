import React from 'react'
import {
  Link
} from 'react-router-dom'

const styleNav = {
  container: {
    color:'black',
    border: '1px solid white',
    backgroundColor:'white',
    border: '10px double black',
    borderRadius: '5px'
   
  },
  title: {
    textAlign:'center',
    fontSize: '45px',
    padding: '17px',
    margin: '10px',
    fontFamily: 'Bowlby One SC',
    letterSpacing: '3px',
    textDecoration: 'underline'
  },
  nav: {
    fontSize: '19px',
    textDecoration:'none',
    display: 'flex',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius:'5px',
    padding: '5px',
    fontFamily: 'Rajdhani'
    

  }, 
}

const NavBar = () =>

  <nav style={styleNav.container}>
  <h1 style={styleNav.title}>SuperHeroes vs. Villains </h1>

  <div style={styleNav.nav}>
    <Link to ='/'>Home</Link>
    <Link to ='/heroes'>Heroes</Link>
    <Link to='/create-hero'> Create Hero</Link>
    <Link to='/villains'>Villains</Link>
    <Link to='/create-villain'> Create Villain </Link>
  </div>
  </nav>

export default NavBar