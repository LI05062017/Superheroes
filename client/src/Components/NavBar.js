import React from 'react'
import {
  Link
} from 'react-router-dom'

const styleNav = {
  container: {
    padding: '15px',
    margin: '15px',
    border: '10px double red',
    fontSize: '18px',
    fontFamily: 'Rajdhani',
    borderRadius: '5px',
    backgroundColor: 'white',


  },
  title: {
    textAlign:'center',
    fontSize: '40px',
    padding: '17px',
    margin: '10px',
    fontFamily: 'Orbitron',
    letterSpacing: '2px',
    textDecoration: 'underline'
  },
  nav: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',

  }, 
}

const NavBar = () =>

  <nav style={styleNav.container}>
  <h1 style={styleNav.title}>⚡️SuperHeroes + Villains⚡️ </h1>
  <div style={styleNav.nav}>
    <Link to ='/'>Home</Link>
    <Link to ='/heroes'>Heroes</Link>
    <Link to='/create-hero'> Create Hero</Link>
    <Link to='/villains'>Villains</Link>
    <Link to='/create-villain'> Create Villain </Link>
  </div>
  </nav>

export default NavBar