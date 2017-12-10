import React from 'react'
import {
  Link
} from 'react-router-dom'

const styleNav = {
  container: {
    padding: '15px',
    margin: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    border: '1px solid black',
    borderRadius: '2px',
    fontSize: '17px'


  },
  title: {
    fontSize: '30px',
    padding: '15px',
    margin: '15px',
  }
}

const NavBar = () =>

  <nav style={styleNav.container}>
  <h1 style={styleNav.title}>⚡️SuperHeros + Villains⚡️ </h1>
    <Link to ='/'>Home</Link>
    <Link to ='/heroes'>Heroes</Link>
    <Link to='/create-hero'> Create Hero</Link>
    <Link to='/villains'>Villains</Link>
    <Link to='/create-villain'> Create Villain </Link>
  </nav>

export default NavBar