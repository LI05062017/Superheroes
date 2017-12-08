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


  }
}

const NavBar = () =>

  <nav style={styleNav.container}>
    <Link to ='/'>Home</Link>
    <Link to ='/heroes'>Heroes</Link>
    <Link to='/create-hero'> Create Hero</Link>
  </nav>

export default NavBar